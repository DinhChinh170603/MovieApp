import { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import axios from "../../services/axios";

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
    axios.get("movie/popular?language=en-US&page=1")
      .then(async (res) => {
        const popu = res.data.results.slice(0, 4);
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
