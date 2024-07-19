import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 py-4 text-white">
      <div className="flex items-center gap-8">
        <img
          className="w-16 sm:w-28"
          src="/src/assets/netflix.png"
          alt="netflix logo"
        />
        <a href="/">Movie</a>
        <a href="/">TV</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
