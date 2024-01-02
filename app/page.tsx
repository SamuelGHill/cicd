async function getData() {
  const res = await fetch('https://api.github.com/users/SamuelGHill')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

export default async function Home() {
  const data = await getData()

  // console.log('data', data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul>
          <li>
            1
          </li>
          <li>
            2
          </li>
        </ul>
      </div>
    </main>
  )
}
