"use client";

import { MOODS } from "@/constants/constants";
import Link from "next/link";
import { useState } from "react"

export default function Mood() {
  const [mood, setMood] = useState(0);

  return (
    <main className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {/* DOTS */}
        <div className="flex flex-row justify-center items-center gap-1">
          <h1 className="font-bold text-4xl text-[#D9D9D9]">•</h1>
          <h1 className="     text-3xl text-[#D9D9D9] opacity-50">•</h1>
        </div>

        {/* TITLE */}
        <h1 className="mt-5 text-white text-5xl font-bold">How are you feeling today?</h1>

        {/* MOODS */}
        <div className="mt-20 flex gap-5 bg-[#3E444E] rounded-3xl">
          { MOODS.map((m, index) => 
              <div key={index} className={`text-8xl p-5 ${mood == index ? "bg-[#00A5C9] rounded-3xl" : ""} cursor-pointer`}
                onClick={ () => setMood(index) }
              >{ m.emoji }</div>
          )}
        </div>

        {/* BUTTON */}
        <Link className="mt-20 bg-[#575B71] hover:bg-[#495073] text-center duration-300 text-white font-bold text-4xl p-5 w-1/2 cursor-pointer rounded-lg"
            href={{ pathname: '/genres', query: { mood: mood } }}>
          NEXT
        </Link>
      </div>
    </main>
  )
}
