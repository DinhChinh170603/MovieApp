import { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import axios from "../../services/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FeatureMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState();

  useEffect(() => {
    axios.get("movie/popular?language=en-US&page=1")
      .then(async (res) => {
        const popu = await res.data.results.slice(0, 4);
        setFeaturedMovies(popu);
        setActiveMovie(popu[0].id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMovie((prev) => {
        const currentIndex = featuredMovies.findIndex(movie => movie.id === prev);
        const nextIndex = (currentIndex + 1) % featuredMovies.length;
        return featuredMovies[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies]);

  return (
    <div className="relative text-white bg-black">
      <TransitionGroup>
        {featuredMovies
          .filter((movie) => activeMovie === movie.id)
          .map((movie) => (
            <CSSTransition
              key={movie.id}
              timeout={500}
              classNames="slide"
              // unmountOnExit
            >
              <Movie key={movie.id} featuredMovies={movie} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <PaginateIndicator
        featuredMovies={featuredMovies}
        activeMovie={activeMovie}
        setActiveMovie={setActiveMovie}
      />
    </div>
  );
};

export default FeatureMovies;
