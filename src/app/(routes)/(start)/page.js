import Link from "next/link";

export default function Start() {
  return (
    <main className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-9xl font-bold">Groove Guru</h1>

        <Link className="mt-20 bg-[#575B71] hover:bg-[#495073] text-center duration-300 text-white font-bold text-4xl p-5 w-1/2 cursor-pointer rounded-lg"
            href={{ pathname: '/mood' }}>
          START
        </Link>
      </div>
    </main>
  )
}
