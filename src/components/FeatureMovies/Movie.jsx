import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const {
    featuredMovies: { id, overview, original_title, first_air_date, backdrop_path },
  } = props;

  return (
    <div>
      <img
        className="bg-img aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={original_title}
      />
      <div className="absolute bottom-[25%] left-[6vw] flex w-1/2 flex-col gap-[1vw] sm:w-1/3">
        <p className="text-[2vw] font-bold sm:text-[2.5vw]">{original_title}</p>
        <div className="">
          <span className="inline-block border border-gray-400 p-[1vw] text-[2vw] text-gray-400">
            PG13
          </span>
        </div>
        <span className="text-[1.2vw]">{first_air_date}</span>
        <div className="hidden text-[1.1vw] sm:block">
          <p className="text-[1.8vw] font-bold">Overview</p>
          <p className="mt-[0.5vw]">{overview}</p>
        </div>
        <div className="mt-4 flex gap-[1.5vw] sm:gap-[1.8vw]">
          <button className="flex items-center gap-[0.5vw] rounded-[.4vw] bg-white px-[1.8vw] py-[0.9vw] text-[1.2vw] text-black sm:rounded sm:px-[1.6vw] lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            <p>Trailer</p>
          </button>
          <Link to={`/movie/${id}`}>
            <button className="rounded-[.4vw] bg-slate-300/35 px-[1vw] py-[0.9vw] text-[1.2vw] text-white sm:rounded sm:px-[1.6vw] lg:text-lg">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
