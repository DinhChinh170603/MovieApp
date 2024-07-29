import React, { useEffect, useRef, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import axios from "../../services/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loading from "../../services/Loading";
import Trailer from "../Trailer";
// import { useAppContext } from "../../contexts/AppProvider";

const FeatureMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [activeMovie, setActiveMovie] = useState();
  const movieRefs = useRef({});
  
  const [loading, setLoading] = useState(true); 

  // const { activeTrailer, setActiveTrailer } = useAppContext();
  
  useEffect(() => {
    axios
      .get("movie/popular?append_to_response=videos")
      .then(async (res) => {
        const popu = await res.data.results.slice(0, 4);
        setFeaturedMovies(popu);
        setActiveMovie(popu[0].id);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMovie((prev) => {
        const currentIndex = featuredMovies.findIndex(
          (movie) => movie.id === prev,
        );
        const nextIndex = (currentIndex + 1) % featuredMovies.length;
        return featuredMovies[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies]);

  return (
    <>
      {loading && <Loading relative={true} hideBg={true} />}
      {/* {activeTrailer && <Trailer trailer={movie.videos.results} setActiveTrailer={setActiveTrailer}/>} */}
      <div className="relative bg-black text-white">
        <TransitionGroup>
          {featuredMovies
            .filter((movie) => (activeMovie === movie.id))
            .map((movie) => {
              const nodeRef = movieRefs.current[movie.id] || React.createRef();
              movieRefs.current[movie.id] = nodeRef;
              return (
                <CSSTransition
                  key={movie.id}
                  timeout={500}
                  classNames="slide"
                  nodeRef={nodeRef}
                >
                  <div ref={nodeRef}>
                    <Movie key={movie.id} featuredMovies={movie} />
                  </div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
        <PaginateIndicator
          featuredMovies={featuredMovies}
          activeMovie={activeMovie}
          setActiveMovie={setActiveMovie}
        />
      </div>
    </>
  );
};

export default FeatureMovies;
