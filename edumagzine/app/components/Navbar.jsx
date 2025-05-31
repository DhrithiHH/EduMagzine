'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <div className="flex items-center gap-2 text-xl font-bold">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        RemoteControl
      </div>
      <div className="flex gap-6 text-sm text-gray-700">
        <Link href="#">About</Link>
        <Link href="#">Artists</Link>
        <Link href="#">Latest News</Link>
        <Link href="#">Tours</Link>
        <Link href="#">Record Stores</Link>
      </div>
      <div className="flex gap-6 text-sm text-gray-700">
        <Link href="#">Queens Of The Stone Age</Link>
        <Link href="#">Music News</Link>
      </div>
    </nav>
  );
}
