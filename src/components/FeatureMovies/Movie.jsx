import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {

  const { featuredMovies : { overview, original_title, first_air_date, backdrop_path} } = props
  console.log(props.featuredMovies);

  return (
    <div>
      <img
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original${props.featuredMovies.backdrop_path}`}
        alt={original_title}
      />
      <div className="absolute bottom-[25%] left-8 flex w-1/2 flex-col gap-2 sm:w-1/3">
        <p className="font-bold sm:text-[2.5vw]">{original_title}</p>
        <div className="">
          <span className="inline-block border border-gray-400 px-4 py-2 text-[2vw] text-gray-400">
            PG13
          </span>
        </div>
        <span className="text-[1.2vw]">{first_air_date}</span>
        <div className="hidden text-[1.2vw] sm:block">
          <p className="text-[1.8vw] font-bold">Overview</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="text-10 flex items-center gap-2 rounded bg-white px-8 py-4 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            <p>Trailer</p>
          </button>
          <button className="text-10 rounded bg-slate-300/35 px-4 py-2 text-white lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
