"use client";

import { GENRES } from "@/constants/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react"

export default function Genres() {
  const searchParams = useSearchParams()

  const [genres, setGenres] = useState([]);

  const mood = searchParams.get('mood');

  return (
    <main className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {/* DOTS */}
        <div className="flex flex-row justify-center items-center gap-1">
          <Link className="text-3xl text-[#D9D9D9] opacity-50 cursor-pointer" href="/mood">•</Link>
          <h1 className="font-bold text-4xl text-[#D9D9D9]">•</h1>
        </div>

        {/* TITLE */}
        <h1 className="mt-5 text-white text-5xl font-bold">What do you like listening to?</h1>

        {/* GENRES */}
        <div className="mt-20 grid gap-10 grid-cols-5">
          { GENRES.map((genre, index) => 
              <div key={index} className="flex flex-col items-center gap-2 cursor-pointer"
                  onClick={ () => {
                    if(genres.includes(index)) return setGenres(genres.filter(g => g !== index))
                    setGenres([...genres, index]);
                  }}>
                <svg viewBox="0 0 512 512" className={ genres.includes(index) ? "fill-green-400" : "fill-white"}>
                  <path d="M384 112V84.4c0-29-24.5-52.4-54.8-52.4H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-56v-37h56v-43h-56v-37h56v-43h-56v-37h56z"/>
                </svg> 
                <h1 className={ `text-xl font-bold ${ genres.includes(index) ? "text-green-400" : "text-white" }` }>{ genre.name }</h1>
              </div>
          )}
        </div>

        {/* BUTTON */}
        <Link className="mt-20 bg-[#575B71] hover:bg-[#495073] text-center duration-300 text-white font-bold text-4xl p-5 w-1/2 cursor-pointer rounded-lg"
            href={{ pathname: '/generate', query: { mood: mood, genres: genres } }}>
          GENERATE
        </Link>
      </div>
    </main>
  )
}
