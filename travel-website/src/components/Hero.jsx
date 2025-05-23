import React from 'react'

const Hero = () => {
  return (
          <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden ">
            {/* Video background */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
              autoPlay
              muted
              loop
              playsInline
              

              src="bgVideo.mp4"
              type="video/mp4"
            />
            {/* Overlay content */}
            <div className="relative z-10 max-w-4xl px-4">
              <h1 data-aos='zoom-in' className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg ">
                Explore the World with <span className='text-orange-500 font-serif '>Alif Travel</span> 
              </h1>
              <p data-aos='fade-up' className="text-lg md:text-2xl mb-8 drop-shadow-md">
                Discover breathtaking destinations and unforgettable experiences.
              </p>
              <a data-aos='fade-up'
                href="#destinations"
                className="inline-block px-8 py-3 bg-teal-500 rounded-full text-lg font-semibold hover:bg-teal-600 transition"
              >
                Start Your Journey
              </a>
            </div>
          </section>
        );
      }

export default Hero