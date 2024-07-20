import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {

  const { featuredMovies : { overview, original_title, first_air_date, backdrop_path} } = props
  // console.log(props.featuredMovies);

  return (
    <div>
      <img
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={original_title}
      />
      <div className="absolute bottom-[25%] left-[6vw] flex w-1/2 flex-col gap-[1vw] sm:w-1/3">
        <p className="font-bold text-[2vw] sm:text-[2.5vw]">{original_title}</p>
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
        <div className="mt-4 flex gap-[1.5vw] sm:gap-[2vw]">
          <button className="text-[1.2vw] flex items-center gap-[0.5vw] rounded bg-white px-[1.8vw] py-[0.9vw] sm:px-[1.6vw] text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            <p>Trailer</p>
          </button>
          <button className="text-[1.2vw] rounded bg-slate-300/35 px-[1vw] py-[0.9vw] text-white sm:px-[1.6vw] lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
