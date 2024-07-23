import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axios";
import { groupBy } from "lodash";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`movie/${id}?append_to_response=videos,release_dates,credits`)
      .then(async (res) => {
        setMovie(await res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const certi = (
    (movie.release_dates?.results || []).find(
      (release) => release.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movie.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const filteredCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden">
      <img
        className="bg-img bg-mov-detail absolute inset-0 w-full brightness-[.3]"
        src={`https://media.themoviedb.org/t/p/original${movie.backdrop_path}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-[1400px] p-[3vw]">
        <div>
          <img
            className="max-h-[35vw] max-w-[20vw] object-cover"
            src={`https://media.themoviedb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>
        <div dir="auto" className="sm:flex-1 flex flex-col gap-[2vw] pl-[5vw]">
          <p className="text-[1.5vw] font-bold sm:text-[1.8vw]">
            {movie.title}
          </p>
          <div className="flex items-center gap-6 text-[1vw]">
            <span className="inline-block border border-gray-400 px-[.6vw] py-[.7vw] text-[1.2vw] text-gray-400">
              {certi}
            </span>
            <span>{movie.release_date}</span>
            <span>
              {(movie.genres || []).map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-[1.5vw] text-[1.2vw] sm:gap-[1.2vw] lg:text-lg">
            <CircularProgressBar
              vote_average={movie.vote_average}
              size={3}
              strokeWidth={0.25}
              fontSize={0.95}
              needsymbol={true}
            />
            Rating
            <button className="flex items-center gap-1.5 bg-transparent sm:px-[1.6vw]">
              <FontAwesomeIcon icon={faPlay} />
              <p>Trailer</p>
            </button>
          </div>
          <div className="in4-mov sm:grid text-[.9vw] flex flex-col">
            <div className="Overview-mov">
              <p className="py-[.7vw] text-[1.5vw] font-bold">Overview</p>
              <p className="max-w-[10vw] sm:max-w-[30vw] md:max-w-[60vw]">{movie.overview}</p>
            </div>
            {Object.keys(filteredCrews).map((key) => (
              <div key={key} className={`${key}-mov`}>
                <p className="text-[1vw] font-bold">
                  {filteredCrews[key].map((crew) => crew.name).join(", ")}
                </p>
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
