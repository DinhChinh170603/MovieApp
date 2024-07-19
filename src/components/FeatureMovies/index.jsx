import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODhkNDUzZTI4NDUyZmViMGYwMjJkMjhkODAxZjAxNiIsIm5iZiI6MTcyMTI4OTczOC40MjA1NzUsInN1YiI6IjY2OTU0MWE2ZWQxNzMxMjMxNmUwNTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0eALvYBNYWk5yQ-1ZvDc6IlSp0GBuovXfepJuE4uYzw",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const popu = data.results.slice(0, 4);
        setFeaturedMovies(popu);
        setActiveMovie(popu[0].id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(featuredMovies);
  console.log(activeMovie);
  return (
    <div className="relative text-white">
      {featuredMovies
        .filter((movie) => movie.id === activeMovie)
        .map((movie) => (
          <Movie key={movie.id} featuredMovies={featuredMovies} />
        ))}
      <PaginateIndicator
        featuredMovies={featuredMovies}
        activeMovie={activeMovie}
        setActiveMovie={setActiveMovie}
      />
    </div>
  );
};

export default FeatureMovies;
