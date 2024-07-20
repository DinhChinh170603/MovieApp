import CircularProgressBar from "./CircularProgressBar";

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
    <div>
      <div className="relative h-[100%] rounded-lg border border-slate-800">
        <div className="relative">
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={nameOfMovie}
          />
        </div>
        <div className="relative -top-[1vw] px-[1.5vw] text-[1.1vw]">
          <CircularProgressBar vote_average={vote_average} />
          <p className="mt-[0.5vw] font-bold">{nameOfMovie}</p>
          <p className="text-slate-300 text-[0.9vw]">{dateOfMovie}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
