'use client';
import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Fixed Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/boxes.jpg')` }}
      />

      {/* Foreground Container */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden flex z-10"  style={{
            backgroundImage: `url('/overlay.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>

        {/* Sign In Form */}
        <div
          className={`w-1/2 flex flex-col justify-center items-center p-10 absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-in-out ${
            isSignIn ? 'translate-x-0 opacity-100 z-10' : '-translate-x-full opacity-0 z-0'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#020618' }}>Sign In</h2>
           <div className="flex space-x-4 mb-4">
    <SocialIcons />
  </div>
          <div className="flex items-center w-full max-w-sm mb-6">
  <div className="flex-1 h-px bg-gray-300" />
  <span className="px-3 text-gray-500 text-sm font-medium">or</span>
  <div className="flex-1 h-px bg-gray-300" />
</div>
          <form className="flex flex-col w-full max-w-sm space-y-4">
            <input type="email" placeholder="Email" className="border px-4 py-2 rounded-md" />
            <input type="password" placeholder="Password" className="border px-4 py-2 rounded-md" />
            <button
  type="submit"
  className="bg-blue-600 text-white rounded-md py-2 mt-4 hover:bg-blue-700 transition"
>
  SIGN IN
</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`w-1/2 flex flex-col justify-center items-center p-10 absolute top-0 right-0 h-full bg-white transition-all duration-700 ease-in-out ${
            isSignIn ? 'translate-x-full opacity-0 z-0' : 'translate-x-0 opacity-100 z-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#020618' }}>Create Account</h2>
           <div className="flex space-x-4 mb-4">
    <SocialIcons />
  </div>
          <div className="flex items-center w-full max-w-sm mb-6">
  <div className="flex-1 h-px bg-gray-300" />
  <span className="px-3 text-gray-500 text-sm font-medium">or</span>
  <div className="flex-1 h-px bg-gray-300" />
</div>
          <form className="flex flex-col w-full max-w-sm space-y-4">
            <input type="text" placeholder="Name" className="border px-4 py-2 rounded-md" />
            <input type="email" placeholder="Email" className="border px-4 py-2 rounded-md" />
            <input type="password" placeholder="Password" className="border px-4 py-2 rounded-md" />
            <button
  type="submit"
  className="bg-blue-600 text-white rounded-md py-2 mt-4 hover:bg-blue-700 transition"
>
  SIGN UP
</button>
          </form>
        </div>

        {/* Moving Overlay Panel */}
        <div className={`absolute top-0 left-0 w-1/2 h-full nset-x-0 bottom- text-white  flex flex-col  items-center px-10   transition-all duration-700 ease-in-out ${isSignIn ? 'translate-x-full' : 'translate-x-0'}`}>
  <div className="max-w-md text-center space-y-6 flex flex-col justify-center h-full py-10">
    <div>
    <h1 className="text-4xl font-bold">
      {isSignIn ?  'Welcome Back!': 'Hello, Friend!' }
    </h1>
    </div>
    <div className="flex flex-col gap-4 items-center">
    <p className="text-lg text-sm">
      {isSignIn
        ?  'New around here? Let’s get you set up — it only takes a moment.':"'Already with us? Great! Just sign in and pick up where you left off.'"}
    </p>
    <button
      onClick={() => setIsSignIn(!isSignIn)}
      className="border border-white px-6 py-2 rounded-full hover:bg-white transition text-base w-fit"
      style={{ color: 'white' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#020618')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
    >
      {isSignIn ? 'SIGN UP' : 'SIGN IN'}
    </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

// Extracted social icons into a reusable component
function SocialIcons() {
  return (
    <>
      <button className="group border rounded-full w-15 h-15 flex items-center justify-center hover:bg-blue-50 transition">
        <FaFacebookF className="text-gray-700 group-hover:text-blue-600 transition" />
      </button>
      <button className="group border rounded-full w-15 h-15 flex items-center justify-center hover:bg-red-50 transition">
        <FaGoogle className="text-gray-700 group-hover:text-red-500 transition" />
      </button>
      <button className="group border rounded-full w-15 h-15 flex items-center justify-center hover:bg-blue-50 transition">
        <FaLinkedinIn className="text-gray-700 group-hover:text-blue-700 transition" />
      </button>
    </>
  );
}

export default AuthPage;

