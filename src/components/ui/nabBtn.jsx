import { Link } from "react-router-dom";
import Arrow from "../../assets/images/icons/icon-arrow.jsx";

export default function NavBtn({ text, to, className }) {
  return (
    <Link
      to={to}
      className={
        "flex w-fit items-center gap-[24px] bg-veryDarkBlue px-[34px] py-[24px] text-white hover:bg-mediumGrey active:bg-lightGrey " +
        className
      }
    >
      <span className="text-[18px] font-bold leading-[25px]">{text}</span>
      <span>
        <Arrow width={24} height={18} />
      </span>
    </Link>
  );
}
