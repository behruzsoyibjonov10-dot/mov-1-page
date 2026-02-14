import React from 'react'

function Banner() {
  return (
    <div className="banner bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto bg-[url('/public/img/BgImg.png')] bg-cover bg-center rounded-2xl p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Start your free trial today!
          </h1>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>

        <div className="flex justify-center md:justify-start mt-6 md:mt-0">
          <button className="bg-[#E50000] hover:bg-[#ff0000] text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Banner
