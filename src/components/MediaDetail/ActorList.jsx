import { useState } from "react";
import NoImage from "../../assets/NoImage.svg";
import Loading from "../../services/Loading";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore ? actors.slice(0, 24) : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-[1vw] text-[3vw] font-bold sm:text-[2vw]">Actors</p>
      <div className="relative grid cursor-pointer grid-cols-4 gap-[1vw] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {currentActor.map((actor) => (
          <div
            key={actor.id}
            className="relative h-[100%] rounded-lg border border-slate-300 shadow-sm shadow-[#000000] hover:scale-105"
          >
            <img
              className="w-[100%] rounded-[6px]"
              src={
                actor.profile_path
                  ? `https://media.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`
                  : `${NoImage}`
              }
            ></img>
            <div className="flex flex-col p-[.9vw] pt-[.6vw] text-[.9vw]">
              <p className="text-[1vw] font-bold">{actor.name}</p>
              <p className="mt-[.1vw]">{actor.character}</p>
              <p className="mt-[.3vw]">18 Episodes</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-[1vw] cursor-pointer text-[1vw]" onClick={() => setIsShowMore(!isShowMore)}>{isShowMore ? "Show Less" : "Show More"}</p>
    </div>
  );
};

export default ActorList;
