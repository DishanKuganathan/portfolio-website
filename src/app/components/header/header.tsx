import React from 'react'

function header() {
  return (
    <div className="h-22 w-full flex items-center justify-between ">
      <p className="font-semibold text-4xl"> Dishan Kuganathan </p>
      <button></button>
      <ul className="flex gap-3 text-lg font-semibold">
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">About me</li>
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">Projecs</li>
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">Skills</li>
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">Certifications</li>
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">Resume</li>
        <li className="hover:text-indigo-600 hover:drop-shadow-lg/30 transition">Contact</li>
      </ul>
    </div >
  )
}

export default header