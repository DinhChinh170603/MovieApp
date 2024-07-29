import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "../../services/axios";
import { Link } from "react-router-dom";
import Loading from "../../services/Loading";

const MediaList = ({ title, tabs }) => {
  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const [loading, setLoading] = useState(true);

  const url = (tabs || []).find((tab) => tab.id === activeTab)?.url;

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then(async (res) => {
          setMovies(res.data.results.slice(0, 12));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [url]);

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col gap-6 bg-black px-[4vw] pb-[3vw] pt-[6vw] text-white">
        <div className="flex items-center gap-[5vw]">
          <p className="text-[3vw] font-bold sm:text-[2vw]">{title}</p>
          <ul className="flex cursor-pointer rounded-[0.5vw] border border-white text-[1.4vw] sm:rounded sm:text-[1vw]">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`rounded-[0.18vw] px-[1.2vw] py-[0.3vw] ${tab.id === activeTab ? "bg-white text-black" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative grid cursor-pointer grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MediaList;
