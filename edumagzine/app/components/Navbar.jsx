// 'use client';

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 border-b">
//       <div className="flex items-center gap-2 text-xl font-bold">
//         <img src="/vercel.svg" alt="Logo" className="w-6 h-6" />
//         RemoteControl
//       </div>
//       <div className="flex gap-6 text-sm text-gray-700">
//         <Link href="#">About</Link>
//         <Link href="#">Artists</Link>
//         <Link href="#">Latest News</Link>
//         <Link href="#">Tours</Link>
//         <Link href="#">Record Stores</Link>
//       </div>
//       <div className="flex gap-6 text-sm text-gray-700">
//         <Link href="#">Queens Of The Stone Age</Link>
//         <Link href="#">Music News</Link>
//       </div>
//     </nav>
//   );
// }


// // import React from 'react';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
// //         <h1 className="text-xl font-bold">EduMagzine</h1>
// //         <ul className="flex gap-6 text-sm">
// //           <li><a href="#knowledge" className="hover:text-yellow-300">Knowledge</a></li>
// //           <li><a href="#explore" className="hover:text-yellow-300">Explore</a></li>
// //           <li><a href="#science" className="hover:text-yellow-300">Science</a></li>
// //           <li><a href="#ideas" className="hover:text-yellow-300">Ideas</a></li>
// //           <li><a href="#language" className="hover:text-yellow-300">Literature</a></li>
// //           <li><a href="#mind" className="hover:text-yellow-300">Mind & Life</a></li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

'use client';
import React from 'react';

export default function Navbar() {
  return (
    <nav className=" px-8 py-1  h-5vh  top-0">
      <div className="max-w-7xl mx-auto my-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-black ">EduMagzine</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#knowledge" className="hover:text-yellow-300  text">Knowledge</a></li>
          <li><a href="#explore" className="hover:text-yellow-300 text">Explore</a></li>
          <li><a href="#science" className="hover:text-yellow-300 text">Science</a></li>
          <li><a href="#ideas" className="hover:text-yellow-300 text">Ideas</a></li>
          <li><a href="#language" className="hover:text-yellow-300 text">Literature</a></li>
          <li><a href="#mind" className="hover:text-yellow-300 text">Mind & Life</a></li>
        </ul>
      </div>
    </nav>
  );
}