import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/netflix.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-[40px] items-center justify-between bg-slate-950 px-[4vw] py-[0.5vw] text-[10px] text-white sm:h-[60px] sm:text-[1vw]">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img className="w-16 sm:w-28" src={logo} alt="netflix logo" />
        </Link>
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
