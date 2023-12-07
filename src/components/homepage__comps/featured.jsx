import sol from "../../assets/images/portfolio/mobile/image-del-sol.jpg";
import sol_tab from "../../assets/images/portfolio/tablet/image-del-sol.jpg";
import sol_desk from "../../assets/images/portfolio/desktop/image-del-sol.jpg";

import _228b from "../../assets/images/portfolio/mobile/image-228b.jpg";
import _228b_tab from "../../assets/images/portfolio/tablet/image-228b.jpg";
import _228b_desk from "../../assets/images/portfolio/desktop/image-228b.jpg";

import proto from "../../assets/images/portfolio/mobile/image-prototype.jpg";
import proto_tab from "../../assets/images/portfolio/tablet/image-prototype.jpg";
import proto_desk from "../../assets/images/portfolio/desktop/image-prototype.jpg";
import { Link } from "react-router-dom";
import NavBtn from "../ui/nabBtn";

const featureds = [
  {
    title: "Project del sol",
    images: {
      mob: sol,
      tab: sol_tab,
      desk: sol_desk,
    },
  },
  {
    title: "228b tower",
    images: {
      mob: _228b,
      tab: _228b_tab,
      desk: _228b_desk,
    },
  },
  {
    title: "le prototype",
    images: {
      mob: proto,
      tab: proto_tab,
      desk: proto_desk,
    },
  },
];

export default function Featured() {
  const rendereCards = featureds.map((per, i) => {
    return (
      <li className="relative grid xl:grow">
        <picture className="col-start-1 row-start-1 h-[240px] xl:h-[560px]">
          <source media="(min-width: 1280px)" srcset={per.images.desk} />
          <source media="(min-width: 640px)" srcset={per.images.tab} />
          <img src={per.images.mob} className="h-full w-full object-cover" />
        </picture>
        <div className="col-start-1 row-start-1 bg-black/40"></div>
        <div className="col-start-1 row-start-1 hidden self-center justify-self-end pr-[16px] text-[250px] font-bold leading-[200px] tracking-[-5px] text-white opacity-50 sm:block xl:self-start xl:pr-0 xl:pt-[45px]">
          {i + 1}
        </div>
        <div className="col-start-1 row-start-1 self-end pb-[24px] pl-[24px] text-white sm:pb-[40px] sm:pl-[40px]">
          <h4 className="text-[32px] font-bold leading-[40px]">{per.title}</h4>
          <Link
            to={"/portfolio"}
            className="text-[18px] font-medium leading-[24px] opacity-75"
          >
            View All Projects
          </Link>
        </div>
      </li>
    );
  });
  return (
    <section className="px-[32px] py-[72px] sm:py-[200px]">
      <div className="mb-[43px] flex items-center justify-between sm:mb-[86px]">
        <h3 className="text-[48px] font-bold leading-[52px] tracking-[-1.714px] text-veryDarkBlue">
          Featured
        </h3>
        <NavBtn
          to={"/portfolio"}
          text={"See All"}
          className={"hidden sm:flex"}
        />
      </div>
      <ul className="flex flex-col gap-[24px] xl:flex-row">
        {rendereCards}
        <NavBtn
          to={"/portfolio"}
          text={"See All"}
          className={"w-full justify-center sm:hidden"}
        />
      </ul>
    </section>
  );
}
