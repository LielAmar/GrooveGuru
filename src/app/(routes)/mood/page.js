"use client";

import { MOODS, MOOD_TO_INDEX } from "@/constants/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react"
import CircularSlider from '@fseehawer/react-circular-slider';

export default function Mood() {
  const searchParams = useSearchParams()

  const queryMood = searchParams.get('mood');
  
  const [mood, setMood] = useState(queryMood ?? 0);
  
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
        <div className="mt-20 flex gap-5 rounded-3xl">
          <CircularSlider
            width={200}
            progressLineCap="flat"
            dataIndex={1}
            label=" "
            data={ MOODS.map(m => m.emoji) }
            valueFontSize="6rem"
            verticalOffset="1rem"
            knobColor="#00bfbd"
            progressColorFrom="#00bfbd"
            progressColorTo="#005a58"
            progressSize={8}
            onChange={ (value) => setMood(MOOD_TO_INDEX.indexOf(value)) }
            trackSize={4}
          >
            {/* <EmojiIcon x="9" y="9" width="18px" height="18px" /> */}
          </CircularSlider>
        </div>

        {/* BUTTON */}
        <Link className="mt-20 bg-[#575B71] hover:bg-[#495073] text-center duration-300 text-white font-bold text-4xl p-5 w-1/2 cursor-pointer rounded-lg"
            href={{ pathname: '/artists', query: { mood: mood } }}>
          NEXT
        </Link>
      </div>
    </main>
  )
}
