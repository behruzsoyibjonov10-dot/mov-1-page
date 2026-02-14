import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const movies = [
  { id: 48, title: "MONEY HEIST", poster: "/public/img/Image (21).png", videoId: "_InqQJRqGW4", duration: 120000 }, // 2 daqiqa
  { id: 49, title: "THE GARY MAN", poster: "/public/img/Image (22).png", videoId: "BmllggGO4pM", duration: 180000 }, // 3 daqiqa
  { id: 50, title: "PEAKY BLINDERS", poster: "/public/img/Image (23).png", videoId: "oVzVdvGIC7U", duration: 150000 }, // 2.5 daqiqa
  { id: 51, title: "MANS", poster: "/public/img/Image (24).png", videoId: "r9jwGansp1E", duration: 180000 },
  { id: 52, title: "There Will Be Blood", poster: "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg", videoId: "FeSLPELpMeM", duration: 180000 },
  { id: 53, title: "Casino", poster: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", videoId: "EJXDMwGWhoA", duration: 120000 },
  { id: 54, title: "No Country for Old Men", poster: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg", videoId: "38A__WT3-o0", duration: 180000 },
  { id: 55, title: "Blade Runner 2049", poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg", videoId: "gCcx85zbxz4", duration: 180000 },
  { id: 56, title: "Shutter Island", poster: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", videoId: "5iaYLCiq5RM", duration: 150000 },
  { id: 57, title: "Arrival", poster: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg", videoId: "tFMo3UJ4B4g", duration: 180000 },
];

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="bg-black px-6 md:px-16 py-14">
      <div className="mb-8 block md:flex items-end justify-between max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            Explore our wide variety of categories
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            Whether you're looking for a comedy, drama, or documentary
          </p>
        </div>
        <div className="flex gap-5 w-35 h-12 bg-[#1a1a1a] rounded-lg items-center justify-center mt-10 md:mt-0">
          <button
            ref={prevRef}
            className="w-13 h-10 rounded-[10px] bg-black text-white hover:bg-[#2a2a2a] transition text-[20px]"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-13 h-10 rounded-[10px] bg-black text-white hover:bg-[#2a2a2a] transition text-[20px]"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={500}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="max-w-7xl mx-auto px-6"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="bg-[#0f0f0f] rounded-xl p-3 w-full cursor-pointer"
              onClick={() =>
                navigate(`/movie/${movie.id}`, { 
                  state: { 
                    poster: movie.poster, 
                    title: movie.title,
                    videoId: movie.videoId,
                    duration: movie.duration
                  } 
                })
              }
            >
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-[300px] md:h-[300px] lg:h-[300px] rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="flex justify-between items-center mt-3 px-1">
                <h3 className="text-white font-medium text-sm md:text-base">
                  {movie.title}
                </h3>
                <span className="text-white font-bold text-lg md:text-xl">→</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
