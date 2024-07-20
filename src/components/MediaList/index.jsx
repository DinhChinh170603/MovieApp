import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TABS = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "movie",
    name: "Movie",
  },
  {
    id: "tv",
    name: "TV Shows",
  },
];

const MediaList = () => {
  const [movies, setMovies] = useState([]);

  const [activeTab, setActiveTab] = useState(TABS[0]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODhkNDUzZTI4NDUyZmViMGYwMjJkMjhkODAxZjAxNiIsIm5iZiI6MTcyMTQ1MDc0MS4zODkzNjQsInN1YiI6IjY2OTU0MWE2ZWQxNzMxMjMxNmUwNTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_TWjIx0FqBkIk-SUaypORqpw-ir8FGmyexQHx_81jM",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setMovies(data.results.slice(0, 12));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-6 bg-black px-[4vw] py-[6vw] text-white">
      <div className="flex items-center gap-8">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex cursor-pointer rounded border border-white text-[1vw]">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              className={`rounded-s px-[1.2vw] py-[0.3vw] ${tab.id === activeTab ? 'text-black bg-white' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
