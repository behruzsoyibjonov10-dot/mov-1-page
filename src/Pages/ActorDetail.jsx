import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ActorDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const actor = state?.actor;

  if (!actor) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Actor maʼlumoti topilmadi</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-30">
      
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-10 text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={20} /> Orqaga
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-60 h-60 rounded-3xl overflow-hidden border border-[#262626]">
          <img
            src={actor.img}
            alt={actor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            {actor.name}
          </h1>

          <p className="text-gray-400 max-w-xl leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vero ex dicta in distinctio sequi excepturi corporis? Facilis, numquam impedit?
          </p>

          <div className="mt-6 flex gap-3">
            <span className="px-4 py-2 rounded-xl bg-[#1a1a1a] border border-[#262626] text-sm">
              Actor ID: {actor.id}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ActorDetail;
