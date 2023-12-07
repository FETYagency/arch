import logo from "../assets/images/Arch 3.svg";
import { Link } from "react-router-dom";
import NavBtn from "./ui/nabBtn";
export default function Footer() {
  return (
    <footer className="footerBgMob xl:footerBgDesk sm:footerBgTab flex min-h-[443px] flex-col items-center gap-[31px] sm:mx-auto sm:min-h-fit sm:max-w-[768px] sm:flex-row sm:justify-between sm:gap-[10px] xl:max-w-[1110px] xl:justify-start xl:gap-[85px]">
      <Link
        to={"/"}
        className="grid aspect-square w-[120px] place-items-center bg-black xl:w-[200px]"
      >
        <img src={logo} />
      </Link>
      <nav className="flex flex-col items-center gap-[32px] text-[18px] font-bold leading-[25px] text-mediumGrey sm:flex-row sm:gap-[20px] xl:gap-[61px] [&>a:hover]:text-veryDarkBlue">
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/about us"}>About Us</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <NavBtn
        to={"/portfolio"}
        text={"See Our Portfolio"}
        className={"xl:ml-auto"}
      />
    </footer>
  );
}
