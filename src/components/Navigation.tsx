import Link from "next/link";
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="p-5 bg-blue"> 
      <div className="flex items-center justify-between gap-10 px-[5%] w-full sm:flex-col">
        <Link href="/" className="flex items-center justify-start gap-5">
          <Image src='/logo.png' alt="Logo" width={40} height={40} />
          <p className="text-white">CARLA PAGOT’S CAKES</p>
        </Link>

        <ul className="flex gap-5 items-center justify-start font-bold uppercase text-white">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/cake-care">Cake care</Link></li>
          <li><Link href="/order" className="block bg-green px-6">Order your cake</Link></li>
        </ul>
      </div>
    </nav>
  )
}