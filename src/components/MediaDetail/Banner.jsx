import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";

const Banner = ({ mediaInfo, activeTrailer, setActiveTrailer }) => {
  console.log(mediaInfo);
  const certi = (
    (mediaInfo.release_dates?.results || []).find(
      (release) => release.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const filteredCrews = groupBy(crews, "job");

  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          className="bg-img bg-mov-detail absolute inset-0 w-full brightness-[.3]"
          src={`https://media.themoviedb.org/t/p/original${mediaInfo.backdrop_path}`}
          alt=""
        />
        <div className="relative mx-auto flex max-w-[1400px] justify-center p-[3vw]">
          <div>
            <img
              className="max-h-[35vw] max-w-[20vw] object-cover"
              src={`https://media.themoviedb.org/t/p/original${mediaInfo.poster_path}`}
              alt=""
            />
          </div>
          <div
            dir="auto"
            className="flex max-w-[80vw] flex-col gap-[2vw] pl-[5vw] sm:max-w-[50vw] sm:flex-1"
          >
            <p className="text-[1.5vw] font-bold sm:text-[1.8vw]">
              {mediaInfo.title}
            </p>
            <div className="flex items-center gap-[2.5vw] text-[1vw]">
              <span className="inline-block border border-gray-400 px-[.6vw] py-[.7vw] text-[1.2vw] text-gray-400">
                {certi ? certi : "N/A"}
              </span>
              <span>
                {mediaInfo.release_date ? mediaInfo.release_date : "N/A"}
              </span>
              <span>
                {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
              </span>
            </div>
            <div className="flex items-center gap-[1.5vw] text-[1.2vw] sm:gap-[1.2vw] lg:text-lg">
              <div>
                <CircularProgressBar
                  vote_average={mediaInfo.vote_average}
                  size={3}
                  strokeWidth={0.25}
                  fontSize={0.95}
                  needsymbol={true}
                />
              </div>
              <p>Rating</p>
              <button className="flex items-center gap-[.5vw] bg-transparent sm:px-[1.6vw]" onClick={() => setActiveTrailer(!activeTrailer)}>
                <FontAwesomeIcon icon={faPlay} />
                <p className="align-middle">Trailer</p>
              </button>
            </div>
            <div className="in4-mov flex flex-col text-[.9vw]">
              <div className="Overview-mov">
                <p className="py-[.7vw] text-[1.5vw] font-bold">Overview</p>
                <p className="max-w-[50vw] sm:max-w-[50vw] md:max-w-[60vw]">
                  {mediaInfo.overview}
                </p>
              </div>
              <div className="mt-[1.5vw] flex flex-wrap gap-[2vw] sm:flex-row sm:gap-[4vw]">
                {Object.keys(filteredCrews).map((key) => (
                  <div className="" key={key}>
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
      </div>
    </div>
  );
};

export default Banner;
