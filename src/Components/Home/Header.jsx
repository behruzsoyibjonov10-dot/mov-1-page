import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./Header.css";
import axios from "axios";
import HeaderMovies from "../Main/Marquee";
function Header() {

    const [movies , setMovies] = useState();
        
    let Base_Url = "https://api.themoviedb.org/3/"
    let Api_Key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkxOTNiNzkzNTBlOTliNGFhNjNkZjRmN2JlYjdmYyIsIm5iZiI6MTc1MjA0OTc0OC45OCwic3ViIjoiNjg2ZTI4NTQ5MmJjYzRiYWRlNmU4Yzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vG6XZs3MsR0-kOOz1FQPxF2Zu0Ddw4rnkw7PCS9D9AI'
    

    const getMovies = async () => {
        const responce = await axios.get(`${Base_Url}trending/movie/day` , {
            headers: {
                Authorization: Api_Key,
            },
        }); 
        setMovies(responce.data.results)        
    };
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <header className="Header relative min-h-screen  bg-black">

                        
                 <div className="absolute inset-0 z-0 opacity-60">
                   <HeaderMovies movies={movies}/>
                   <HeaderMovies movies={movies}/>
                   <HeaderMovies movies={movies}/>
                </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10"></div>

            <div className="relative z-20 min-h-screen flex items-end">
                <div className="title text-center w-full mx-auto px-4 pb-16">

                    <div className="Logo flex justify-center mb-20 md:mb-28 mt-10">
                        <img className="w-[16%] relative top-14" src="/img/LogoHero.png" alt="Logo" />
                    </div>

                    <h1 className="text-white font-bold mb-6 text-3xl sm:text-3xl md:text-3xl lg:text-3xl">
                        The Best Streaming Experience
                    </h1>

                    <p className="text-[#999999] mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-1 leading-relaxed">
                        StreamVibe is the best streaming experience for watching your favorite
                        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
                        enjoy a wide variety of content.
                    </p>

                  
                </div>
            </div>
        </header>
    );
}

export default Header;
