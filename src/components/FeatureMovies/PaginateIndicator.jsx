const PaginateIndicator = ({ featuredMovies, activeMovie, setActiveMovie }) => {
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {featuredMovies.map((movie) => (
          <li
            key={movie.id}
            className={`h-1 w-6 cursor-pointer ${activeMovie === movie.id ? "bg-slate-100" : "bg-slate-600"}`}
            onClick={() => setActiveMovie(movie.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
