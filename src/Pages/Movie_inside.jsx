import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Banner from '../Components/Main/Banner'
import { 
  Play, 
  Volume2, 
  Calendar, 
  Globe, 
  Star, 
  LayoutGrid, 
  User, 
  ArrowLeft, 
  ArrowRight,
  Music,
  X 
} from "lucide-react";

const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const castScrollRef = useRef(null);
  const reviewScrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const [showVideo, setShowVideo] = useState(false);
  const playerTimerRef = useRef(null);

  const { poster, title, videoId, duration } = location.state || {};

  const castData = [
    { 
      id: 1, 
      name: "Kevin O'Leary", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hRqkwN-sFNe9gqyUGa_tOVr6GYDxyQsWLm8XZkKZ7JTEMk1uyZAX4ffJxQGqy6BDXQv7l9ngig9myDck6k_eM0WdNpcyrwUjNr0HCQ&s"
    },
    { id: 2, name: "Actor 2", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Actor 3", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Actor 4", img: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Actor 5", img: "https://i.pravatar.cc/150?u=5" },
    { id: 6, name: "Actor 6", img: "https://i.pravatar.cc/150?u=6" },
  ];

  // 8 ta kichikroq box uchun ma'lumotlar
  const reviewsData = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Aniket Roy ${i + 1}`,
    from: "India",
    rating: 4.5,
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it."
  }));

  const videoStart = 0; 
  const videoDuration = duration || 90000; 

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const container = ref.current;
      // Box kengligi va oraliq (gap) ni hisobga olgan holda 2 ta box miqdori
      const boxWidth = container.querySelector('.review-box')?.clientWidth || 300;
      const gap = 16; 
      const scrollAmount = (boxWidth + gap) * 2; 

      const scrollTo = direction === "left" 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
      
      // Nuqta (dot) indikatorini 2 talik qadamga moslash
      setTimeout(() => {
        const index = Math.round(container.scrollLeft / scrollAmount);
        setActiveDot(index);
      }, 300);
    }
  };

  if (!poster) return <div className="text-white p-20 text-center">Rasm yuklanmadi...</div>;

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans pb-20">

      {showVideo && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4">
          <button 
            onClick={() => {
              setShowVideo(false);
              clearTimeout(playerTimerRef.current);
            }}
            className="absolute top-8 right-8 text-white hover:text-[#E50000] transition-all"
          >
            <X size={40} />
          </button>

          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-[#262626] bg-black shadow-2xl">
            <iframe
              key={videoId} 
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${videoStart}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-10 pt-1">
        <div className="relative w-full h-[500px] md:h-[700px] rounded-[40px] overflow-hidden">
          <img src={poster} alt={title} className="absolute inset-0 w-[110%] h-[80%] object-center transition-opacity duration-700 mt-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-16 left-0 w-full text-center z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase">{title}</h1>
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={() => {
                  setShowVideo(true);
                  playerTimerRef.current = setTimeout(() => {
                    setShowVideo(false);
                  }, videoDuration);
                }}
                className="bg-[#E50000] hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-red-600/20"
              >
                <Play fill="currentColor" size={24} /> Play Now
              </button>
              <button className="bg-[#0f0f0f]/60 border border-[#262626] p-4 rounded-2xl hover:border-[#E50000] transition-all">
                <Volume2 size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">

          <DetailCard title="Description">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.
            </p>
          </DetailCard>

          <DetailCard 
            title="Cast" 
            action={
              <div className="flex gap-2">
                <button onClick={() => handleScroll(castScrollRef, "left")} className="p-3 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E50000] transition-all"><ArrowLeft size={20}/></button>
                <button onClick={() => handleScroll(castScrollRef, "right")} className="p-3 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E50000] transition-all"><ArrowRight size={20}/></button>
              </div>
            }
          >
            <div className="overflow-hidden">
              <div ref={castScrollRef} className="flex gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth">
                {castData.map((actor) => (
                  <div 
                    key={actor.id} 
                    onClick={() => navigate(`/actor/${actor.id}`, { state: { actor } })}
                    className="min-w-[120px] group cursor-pointer"
                  >
                    <div className="aspect-square bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#262626] group-hover:border-[#E50000] transition-all active:scale-95">
                      <img src={actor.img} alt={actor.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-2 text-center text-gray-300 text-sm">{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </DetailCard>

          <DetailCard 
            title="Reviews" 
            action={
              <div className="flex items-center gap-4">
                <button className="bg-[#141414] border border-[#262626] px-4 py-2 rounded-xl text-sm font-medium hover:border-[#E50000] transition-all">
                  + Add Your Review
                </button>
                <div className="flex gap-2">
                  <button onClick={() => handleScroll(reviewScrollRef, "left")} className="p-3 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E50000] transition-all"><ArrowLeft size={20}/></button>
                  <button onClick={() => handleScroll(reviewScrollRef, "right")} className="p-3 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E50000] transition-all"><ArrowRight size={20}/></button>
                </div>
              </div>
            }
          >
            <div className="overflow-hidden">
              <div 
                ref={reviewScrollRef} 
                className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
              >
                {reviewsData.map((review) => (
                  <div 
                    key={review.id} 
                    className="review-box min-w-[calc(50%-8px)] bg-[#0f0f0f] border border-[#262626] p-5 rounded-2xl snap-start"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-base">{review.name}</h4>
                        <p className="text-gray-500 text-xs">From {review.from}</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#141414] border border-[#262626] px-2.5 py-1 rounded-full">
                        <Star size={12} fill="#E50000" stroke="none" />
                        <span className="text-xs font-bold">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeDot ? "w-6 bg-[#E50000]" : "w-2 bg-[#262626]"}`}
                ></div>
              ))}
            </div>
          </DetailCard>

        </div>

        <div className="lg:col-span-4">
          <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[30px] space-y-10 sticky top-10">
            <SidebarItem icon={<Calendar size={20}/>} label="Released Year" value="2001-07-20" />
            
            <SidebarItem icon={<Globe size={20}/>} label="Available Languages">
              <div className="mt-3">
                <span className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-xl text-xs font-medium">Japanese</span>
              </div>
            </SidebarItem>

            <SidebarItem icon={<Star size={20}/>} label="Ratings">
              <div className="grid grid-cols-2 gap-4 mt-3">
                <RatingBox label="IMDb" score="5" />
                <RatingBox label="Streamvibe" score="5" />
              </div>
            </SidebarItem>

            <SidebarItem icon={<LayoutGrid size={20}/>} label="Genres">
              <div className="flex flex-wrap gap-2 mt-3">
                {["Animation", "Family", "Fantasy"].map(g => (
                  <span key={g} className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-xl text-xs font-medium">{g}</span>
                ))}
              </div>
            </SidebarItem>

            <SidebarItem icon={<User size={20}/>} label="Director">
              <div className="mt-4 flex items-center gap-4 bg-[#0f0f0f] border border-[#262626] p-4 rounded-2xl">
                <img src="https://i.pravatar.cc/100?u=hayao" className="w-12 h-12 rounded-xl object-cover" alt="dir" />
                <div>
                  <p className="font-bold text-sm">Hayao Miyazaki</p>
                  <p className="text-xs opacity-70">宫崎骏</p>
                </div>
              </div>
            </SidebarItem>

            <SidebarItem icon={<Music size={20}/>} label="Original Music Composer">
              <div className="mt-4 flex items-center gap-4 bg-[#0f0f0f] border border-[#262626] p-4 rounded-2xl">
                <img src="https://i.pravatar.cc/100?u=joe" className="w-12 h-12 rounded-xl object-cover" alt="comp" />
                <div>
                  <p className="font-bold text-sm">Joe Hisaishi</p>
                  <p className="text-xs opacity-70">久石让</p>
                </div>
              </div>
            </SidebarItem>
          </div>
        </div>
      </div>

      <Banner />

    </div> 
  );
};

const DetailCard = ({ title, children, action }) => (
  <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[30px]">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-gray-400 text-lg font-medium">{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, value, children }) => (
  <div className="w-full">
    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm">{icon} <span className="font-medium">{label}</span></div>
    {value && <p className="text-xl font-bold ml-7">{value}</p>}
    <div className="ml-7">{children}</div>
  </div>
);

const RatingBox = ({ label, score }) => (
  <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-2xl hover:border-[#E50000] transition-all cursor-pointer">
    <p className="text-xs font-bold text-gray-400 mb-2 uppercase">{label}</p>
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#E50000" strokeWidth={0} />)}</div>
      <span className="font-bold text-lg">{score}</span>
    </div>
  </div>
);

export default MovieDetail;