import x from "../../assets/images/icons/icon-twitter.svg";
import ld from "../../assets/images/icons/icon-linkedin.svg";
export default function Card({ per }) {
  return (
    <figure>
      <div className="group relative mb-[15px] h-[284px] xl:h-[320px]">
        <div className="absolute inset-0 grid origin-bottom-left scale-0 place-items-center bg-black/50 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          <ul className="flex gap-[18px] [&>li]:cursor-pointer">
            <li>
              <img src={x} />
            </li>
            <li>
              <img src={ld} />
            </li>
          </ul>
        </div>
        <img src={per.image} className="h-full w-full object-cover" />
      </div>
      <cite className="not-italic">
        <h4 className="text-[32px] font-bold leading-[40px] text-veryDarkBlue">
          {per.name}
        </h4>
        <span className="text-[18px] font-medium leading-[24px] text-veryDarkBlue opacity-75">
          {per.role}
        </span>
      </cite>
    </figure>
  );
}
