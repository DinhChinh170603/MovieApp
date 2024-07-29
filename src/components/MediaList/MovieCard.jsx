import CircularProgressBar from "../CircularProgressBar";
import NoBackdrop from "../../assets/NoBackdrop.svg";


const MovieCard = (props) => {
  const {
    movie: {
      poster_path,
      release_date,
      original_name,
      original_title,
      name,
      title,
      vote_average,
      first_air_date,
    },
  } = props;

  const nameOfMovie = title
    ? title
    : name
      ? name
      : original_name
        ? original_name
        : original_title;
  const dateOfMovie = release_date ? release_date : first_air_date;

  return (
    <div className="relative h-[100%] rounded-lg border border-slate-800">
      <div className="relative">
        <img
          className="rounded-lg"
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${NoBackdrop}`}
          alt={nameOfMovie}
        />
      </div>
      <div className="relative -top-[1vw] px-[3vw] text-[1.1vw] sm:px-[2vw] md:px-[1.5vw]">
        <CircularProgressBar vote_average={vote_average} />
        <p className="mt-[0.5vw] font-bold">{nameOfMovie}</p>
        <p className="text-[0.9vw] text-slate-300">{dateOfMovie}</p>
      </div>
    </div>
  );
};

export default MovieCard;
