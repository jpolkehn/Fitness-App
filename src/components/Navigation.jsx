import React from "react";
import { Link } from "react-router-dom";
import home from "../Images/home.svg";
import hantel from "../Images/hantel.svg";
import profil from "../Images/profil.svg";

const Navigation = () => {
  return (
    <nav>
      <ul className="bg-black flex fixed bottom-0 left-0 w-full justify-around h-[50px] content-center items-center">
        <li className="block">
          <Link to="/">
            <img src={home} alt="home" />
          </Link>
        </li>
        <li className="block">
          <Link to="/Programme">
            <img src={hantel} alt="" />
          </Link>
        </li>
        <li className="block">
          <Link to="/Profile">
            <img src={profil} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
