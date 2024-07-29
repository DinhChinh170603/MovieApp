import { useEffect, useState } from "react";

export default function Trailer({ trailer, setActiveTrailer }) {
  const [isTrailerVisible, setTrailerVisible] = useState(true);
  const trailerLink = (trailer || []).find(
    (release) => release.name === "Official Trailer",
  )?.key;

  const handleCloseTrailer = (e) => {
    if (e.target.id === "trailerContainer") {
      setTrailerVisible(false);
      setActiveTrailer(false);
    }
  };

  useEffect(() => {
    setTrailerVisible(true);
  }, [trailer]);

  if (!isTrailerVisible) {
    return null;
  }

  return (
    <div
      id="trailerContainer"
      onClick={handleCloseTrailer}
      className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-black bg-opacity-75"
    >
      <iframe
        width="900px"
        height="500px"
        src={`https://www.youtube.com/embed/${trailerLink}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
