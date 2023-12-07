import logo from "../assets/images/logo.svg";
import hum from "../assets/images/icons/icon-hamburger.svg";
import { NavLink, Link } from "react-router-dom";
import { useState, useSyncExternalStore } from "react";
import { getSnapShot, subscriber } from "../utls/isMobile";
export default function Header() {
  let [nav, setNav] = useState(false);
  let isMobile = useSyncExternalStore(subscriber, getSnapShot);
  let isValidToUse = (nav && isMobile) || !isMobile;
  return (
    <header className="relative flex items-center gap-[95px] p-[32px] sm:mx-auto sm:max-w-[573px] sm:gap-[74px] sm:px-0 sm:py-[51px] xl:max-w-[1110px] xl:gap-[96px] xl:py-[56px]">
      <Link to={"/"}>
        <img src={logo} />
      </Link>
      {isMobile && (
        <button onClick={() => setNav((prev) => !prev)} className="ml-auto">
          <img src={hum} />
        </button>
      )}
      {isValidToUse && (
        <nav className="absolute right-0 top-[100%] z-50 flex w-full max-w-[343px] flex-col items-start gap-[17px] bg-veryLightGrey px-[48px] py-[40px] text-[32px] font-bold capitalize leading-[40px] text-veryDarkBlue sm:static sm:max-w-none  sm:flex-row sm:gap-[51px] sm:bg-transparent sm:p-0 sm:text-[18px] sm:leading-[25px] xl:gap-[61px]">
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => {
              return isActive ? "sm:text-veryDarkBlue" : "sm:text-mediumGrey";
            }}
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/about us"}
            className={({ isActive }) => {
              return isActive ? "sm:text-veryDarkBlue" : "sm:text-mediumGrey";
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              return isActive ? "sm:text-veryDarkBlue" : "sm:text-mediumGrey";
            }}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}
