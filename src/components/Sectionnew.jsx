import React, { useRef } from 'react'

export default function Sectionnew() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    function scrollToSection(ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div className="relative min-h-screen">
    <nav className="fixed top-0 left-0 p-4 bg-gray-800 text-white space-x-4">
      <button
        onClick={() => scrollToSection(section1Ref)}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go to Section 1
      </button>
      <button
        onClick={() => scrollToSection(section2Ref)}
        className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Go to Section 2
      </button>
      <button
        onClick={() => scrollToSection(section3Ref)}
        className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Go to Section 3
      </button>
    </nav>

    <div ref={section1Ref} className="h-screen flex items-center justify-center bg-blue-300">
      <h1 className="text-3xl font-bold">Section 1</h1>
    </div>
    <div ref={section2Ref} className="h-screen flex items-center justify-center bg-green-300">
      <h1 className="text-3xl font-bold">Section 2</h1>
    </div>
    <div ref={section3Ref} className="h-screen flex items-center justify-center bg-purple-300">
      <h1 className="text-3xl font-bold">Section 3</h1>
    </div>
  </div>
  )
}
