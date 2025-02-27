import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axios";
import Loading from "../services/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import Information from "../components/MediaDetail/Information";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import Trailer from "../components/Trailer";
import { useAppContext } from "../contexts/AppProvider";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true);

  const { activeTrailer, setActiveTrailer } = useAppContext();

  useEffect(() => {
    axios
      .get(
        `movie/${id}?append_to_response=videos,release_dates,credits,similar`,
      )
      .then(async (res) => {
        setMovie(await res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading && <Loading relative={true} hideBg={true} />}
      {activeTrailer && (
        <Trailer
          trailer={movie.videos.results}
          setActiveTrailer={setActiveTrailer}
        />
      )}
      <Banner mediaInfo={movie} setActiveTrailer={setActiveTrailer} />
      <div className="grid grid-cols-12 gap-4 px-[4vw] pb-[3vw] pt-[4vw]">
        <div className="col-span-12 sm:col-span-8 md:col-span-9 xl:col-span-10">
          <ActorList actors={movie.credits?.cast || []} />
          <RelatedMediaList relatedMovies={movie.similar?.results || []} />
        </div>
        <div className="sm:col-span-4 md:col-span-3 xl:col-span-2">
          <Information
            name={movie.title ? movie.title : movie.original_name}
            country={movie.origin_country}
            status={movie.status}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
