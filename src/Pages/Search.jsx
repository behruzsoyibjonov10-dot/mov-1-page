import { useState } from "react";
import Banner from '../Components/Main/Banner';

function Search() {
  const [active, setActive] = useState("All");

  return (
    <div className="bg-black px-4 sm:px-6 md:px-10 lg:px-20 pt-[120px] pb-20">
      <div className="max-w-[1500px] mx-auto">

        {/* Search bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for movies, TV shows, or actors..."
            className="flex-1 bg-[#111] text-[#999] px-4 py-3 md:px-5 md:py-4 rounded-xl border border-[#222] outline-none hover:border-red-600 transition"
          />
          <button className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-red-700 transition">
            Search
          </button>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 md:mt-10">
          {["Movies", "TV Series", "Actors", "All"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-3 md:px-8 md:py-4 rounded-xl border transition hover:bg-red-600
                ${
                  active === item
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-[#111] text-white border-[#222]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Banner */}
      <div className="relative w-full md:w-[112%] md:right-20 lg:w-[110%] lg:right-16">
  <Banner />
</div>

    </div>
  );
}

export default Search;
