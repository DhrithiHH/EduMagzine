'use client'

import { useState, Fragment, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FlyoutNavbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Placeholder ⚡</div>
          <div className="flex items-center gap-8">
            <FlyoutMenu />
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
            <a href="#">Documentation</a>
            <div className="ml-4 flex gap-2">
              <button className="border px-4 py-1 rounded">Sign in</button>
              <button className="bg-indigo-600 px-4 py-1 rounded text-white">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function FlyoutMenu() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  // Open menu on mouse enter
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  // Close menu on mouse leave, delayed to allow moving to panel smoothly
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <Popover className="relative" as="div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} open={open}>
      <>
        <Popover.Button className="flex items-center gap-1 hover:text-indigo-400" as="div">
          About us
          <ChevronDownIcon className={`w-4 h-4 transition ${open ? 'rotate-180' : ''}`} />
        </Popover.Button>

        <Transition
          as={Fragment}
          show={open}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="absolute z-10 mt-3 w-screen max-w-4xl left-1/2 -translate-x-1/2 bg-white text-black shadow-lg rounded-lg overflow-hidden"
          >
            <div className="flex">
              {/* Left Section */}
              <div className="bg-black text-white p-6 w-1/3">
                <h3 className="text-lg font-semibold">About us</h3>
                <p className="mt-2 text-sm">
                  Placeholder is the world's leading placeholder company.
                </p>
                <a href="#" className="mt-4 inline-block text-indigo-400">
                  Learn more →
                </a>
              </div>

              {/* Right Section */}
              <div className="grid grid-cols-2 gap-4 p-6 w-2/3">
                {[
                  { title: 'Features', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                  { title: 'Testimonials', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                  { title: 'Press', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                  { title: 'Blog', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                ].map((item, idx) => (
                  <div key={idx} className="border rounded p-4 hover:bg-gray-50">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm mt-1 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  )
}
