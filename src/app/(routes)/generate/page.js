"use client";

import { useSearchParams } from "next/navigation";

export default function Generate() {
  const searchParams = useSearchParams()

  const mood = searchParams.get('mood');
  const genres = searchParams.getAll('genres');

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
        {/* TODO: generate playlist and display */}
      </div>
    </main>
  )
}
