'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageBody from '../components/PageBody';
import Hello from '../components/Hello';

export default function Home() {

  return (
    <main>
      {/* <Navbar /> */}

      <div className="sticky top-0 z-0 bg-white">
        <div className="flex flex-col lg:flex-row w-[90%] mx-auto ">
          <div className="w-full lg:w-1/2">
            <Hero />
          </div>
          <div
            className="w-full lg:w-1/2 group  cursor-pointer"
          >
            <Hello  />
          </div>
        </div>
      </div>
    <div className="relative z-0 bg-white min-h-scree">
      <PageBody className="pagebody" />
    </div>
    </main>
  );
}
