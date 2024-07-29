import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MediaList/MovieCard";

const RelatedMediaList = ({ relatedMovies = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currMovie = isShowMore
    ? relatedMovies.slice(0, 20)
    : relatedMovies.slice(0, 4);

  return (
    <div className="mt-[3vw]">
      <p className="mb-[1vw] text-[3vw] font-bold sm:text-[2vw]">
        More like this
      </p>
      <div className="relative grid cursor-pointer grid-cols-2 gap-[1vw] sm:grid-cols-4">
        {currMovie.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
      <p
        className="mt-[1vw] cursor-pointer text-[1vw]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default RelatedMediaList;
