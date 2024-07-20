import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState();

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [featuredMovies.length]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODhkNDUzZTI4NDUyZmViMGYwMjJkMjhkODAxZjAxNiIsIm5iZiI6MTcyMTQ1MDc0MS4zODkzNjQsInN1YiI6IjY2OTU0MWE2ZWQxNzMxMjMxNmUwNTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_TWjIx0FqBkIk-SUaypORqpw-ir8FGmyexQHx_81jM",
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

  return (
    <div className="relative text-white">
      {featuredMovies
        .filter((movie) => activeMovie === movie.id)
        .map((movie) => (
          <Movie key={movie.id} featuredMovies={movie} />
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
