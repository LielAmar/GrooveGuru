"use client";

import { example_response } from "@/constants/example_response";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const parseSpotifyResponse = (response) => {
  console.log(response['tracks']);
  const tracks = response['tracks']['items'].map((track) => {
    return {
      url: track['external_urls']['spotify'],
      name: track['name'], 
      image: track['album']['images'][0]['url'],
    }
  });

  return tracks;
}

export default function Generate() {
  const searchParams = useSearchParams()

  const mood = searchParams.get('mood');
  const genres = searchParams.getAll('genres');

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const response = parseSpotifyResponse(example_response);
    console.log(response);
    setTracks(response);
  }, [example_response]);

  return (
    <main className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {/* TITLE */}
        <h1 className="mt-5 text-white text-5xl font-bold">Your generated playlist</h1>

        <h2 className="text-white">debug params:</h2>
        <h2 className="text-white">mood: { mood }</h2>
        <h2 className="text-white">genres:</h2>
        { genres.map((g, index) => <h2 className="text-white" key={index}>{ g }</h2>) }

        {/* PLAYLIST */}
        { tracks.map((track, index) => {
            return (
              <div key={index} className="flex flex-row justify-center items-center gap-5">
                <img src={ track.image } />
                <h1 className="text-white text-2xl font-bold">{ track.name }</h1>
                <a href={ track.url } target="_blank" className="text-white text-2xl font-bold">Listen</a>
              </div>
            )
          })
        }
        {/* TODO: generate playlist and display */}
      </div>
    </main>
  )
}
