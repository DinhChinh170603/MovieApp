import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";

const MediaList = ({ title, tabs }) => {
  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const url = (tabs || []).find((tab) => tab.id === activeTab)?.url;

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then(async (res) => {
          setMovies(res.data.results.slice(0, 12));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [url]);

  return (
    <div className="flex flex-col gap-6 bg-black px-[4vw] pb-[3vw] pt-[6vw] text-white">
      <div className="flex items-center gap-8">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex cursor-pointer rounded border border-white text-[1vw]">
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
          <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick}/>
        ))}
      </div>
    </div>
  );
};

export default MediaList;
