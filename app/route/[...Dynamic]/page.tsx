"use client"
export default function Home({ params: { Dynamic } }) {
  console.log(typeof Dynamic)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello from dynamix page currently using {Dynamic} </div>
    </main>
  )
}
