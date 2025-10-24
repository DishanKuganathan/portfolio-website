import React from 'react'

function aboutme() {
  return (
    <div className="h-full w-full bg-zinc-800 mx-auto grid grid-cols-1 xl:grid-cols-2">
      <div className="">
        <p className="text-xl">Software Developer</p>
        <span className="text-8xl font-semibold ">
          <p className="">Hello I'm</p>
          <span className="text-[#00FFFF]">
            <p className="">Dishan</p>
            <p className="">Kuganathan</p>
          </span>
        </span>
        <p className="max-w-[500px] mb-9 text-white/80">4. year of apprenticship as a Software developer</p>

        {/* Button Section */}
        {/* Download CV */}
        <div className="flex items-center gap-4">
          <button
            className="p-3 rounded-full backdrop-blur-lg border border-[#00FFFF] bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-[#00FFFF] hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            >    </div>
            <div className="flex items-center pl-3">
              <span className="text-base">DOWNLOAD CV</span>
              <img
                src="/download-logo.svg"
                alt=""
                className="w-11.5 h-5 group-hover:opacity-90 transition duration-300"
              />
            </div>
          </button>
          {/* Github */}
          <button
            className="p-3 rounded-full backdrop-blur-lg border border-[#00FFFF] bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-[#00FFFF] hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            ></div>
            <div className="relative z-1">
              <img
                src="/github-logo.svg"
                alt="GitHub"
                className="w-7 h-7 group-hover:opacity-90 transition duration-300"
              />
            </div>
          </button>

          {/* Linkedin */}
          <button
            className="p-3 rounded-full backdrop-blur-lg border border-[#00FFFF] bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-[#00FFFF] hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            ></div>
            <div className="relative z-1">
              <img
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                className="w-7 h-7 group-hover:opacity-90 transition duration-300"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/test.jpg" className="h-[500px] w-[500px] rounded-full object-cover" alt="profilpicture" />
      </div>
    </div>

  )
}

export default aboutme