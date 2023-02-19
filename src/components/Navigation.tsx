import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="p-5 bg-blue-400">
        <ul className="flex gap-5 items-center justify-start">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}