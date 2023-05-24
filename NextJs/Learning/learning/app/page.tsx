import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Hello</h1>
        <Link href={`/about`}>Go to about Page</Link>
    </main>
  )
}
