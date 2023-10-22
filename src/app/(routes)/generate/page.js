"use client";

import { MOODS } from "@/constants/constants";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const parseSpotifyResponse = (recs) => {
  const tracks = recs.map((rec) => {
    return {
      url: rec['external_urls']['spotify'],
      name: rec['name'], 
      image: rec['album']['images'][0]['url'],
    }
  });

  return tracks;
}

export default function Generate() {
  const searchParams = useSearchParams()

  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  const mood = searchParams.get('mood');
  const genres = searchParams.getAll('genres');

  useEffect(() => {
    async function init() {
      try {
        setLoading(true)
        const recs = await generateSongRecs()
        const parsedRecs = parseSpotifyResponse(recs);
        setTracks(parsedRecs)
      } catch (err) {
        console.warn(err)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  async function generateSpotifyAPIKey() {
    return new Promise(async (resolve, reject) => {
      try {
        var client_id = '793d754b816441618f4e11c3e5db3b37';
        var client_secret = '146042a7f95d4c8bb586b516a9507c4b';

        const res = await axios.post('https://accounts.spotify.com/api/token', {
          grant_type: 'client_credentials'
        }, {
          headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        const body = res.data
        var token = body.access_token;
        resolve(token)
      } catch (err) {
        reject(err)
      }
    })
  }

  async function generateSongRecs() {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await generateSpotifyAPIKey()
  
        const res = await axios.get('https://api.spotify.com/v1/search', {
          params: {
            query: `mood:${mood}`,
            type: "track",
            limit: "50"
          },
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        const body = res.data
        const tracks = body.tracks
        resolve(tracks.items)
      } catch (err) {
        reject(err)
      }
    })
  }

  return (
    <main className="flex flex-row justify-center items-center">
      <div className="flex flex-col items-center">
        {/* TITLE */}
        <h1 className="mt-5 text-white text-4xl font-bold">Your {MOODS[mood].name} playlist </h1>

        {/* PLAYLIST */}
        <div className="mt-10 grid grid-cols-3 gap-5">
          { tracks.map((track, index) => {
              return (
                <div key={index} className="flex flex-col justify-center items-center gap-5">
                  <img src={ track.image } width="50" height="50" />
                  <h1 className="text-white">{ track.name }</h1>
                  <a href={ track.url } target="_blank" className="text-white text-2xl font-bold">Listen</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
