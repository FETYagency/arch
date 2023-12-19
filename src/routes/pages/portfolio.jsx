import { useRef, useEffect } from "react";

import sol from "../../assets/images/portfolio/mobile/image-del-sol.jpg";
import sol_tab from "../../assets/images/portfolio/tablet/image-del-sol.jpg";
import sol_desk from "../../assets/images/portfolio/desktop/image-del-sol.jpg";

import _228b from "../../assets/images/portfolio/mobile/image-228b.jpg";
import _228b_tab from "../../assets/images/portfolio/tablet/image-228b.jpg";
import _228b_desk from "../../assets/images/portfolio/desktop/image-228b.jpg";

import proto from "../../assets/images/portfolio/mobile/image-prototype.jpg";
import proto_tab from "../../assets/images/portfolio/tablet/image-prototype.jpg";
import proto_desk from "../../assets/images/portfolio/desktop/image-prototype.jpg";

import edelWise from "../../assets/images/portfolio/mobile/image-edelweiss.jpg";
import edelWise_tab from "../../assets/images/portfolio/tablet/image-edelweiss.jpg";
import edelWise_desk from "../../assets/images/portfolio/desktop/image-edelweiss.jpg";

import eeBox from "../../assets/images/portfolio/mobile/image-eebox.jpg";
import eeBox_tab from "../../assets/images/portfolio/tablet/image-eebox.jpg";
import eeBox_desk from "../../assets/images/portfolio/desktop/image-eebox.jpg";

import federal from "../../assets/images/portfolio/mobile/image-federal.jpg";
import federal_tab from "../../assets/images/portfolio/tablet/image-federal.jpg";
import federal_desk from "../../assets/images/portfolio/desktop/image-federal.jpg";

import hypers from "../../assets/images/portfolio/mobile/image-hypers.jpg";
import hypers_tab from "../../assets/images/portfolio/tablet/image-hypers.jpg";
import hypers_desk from "../../assets/images/portfolio/desktop/image-hypers.jpg";

import netcry from "../../assets/images/portfolio/mobile/image-netcry.jpg";
import netcry_tab from "../../assets/images/portfolio/tablet/image-netcry.jpg";
import netcry_desk from "../../assets/images/portfolio/desktop/image-netcry.jpg";

import paramour from "../../assets/images/portfolio/mobile/image-paramour.jpg";
import paramour_tab from "../../assets/images/portfolio/tablet/image-paramour.jpg";
import paramour_desk from "../../assets/images/portfolio/desktop/image-paramour.jpg";

import seraph from "../../assets/images/portfolio/mobile/image-seraph.jpg";
import seraph_tab from "../../assets/images/portfolio/tablet/image-seraph.jpg";
import seraph_desk from "../../assets/images/portfolio/desktop/image-seraph.jpg";

import sxiv from "../../assets/images/portfolio/mobile/image-sxiv.jpg";
import sxiv_tab from "../../assets/images/portfolio/tablet/image-sxiv.jpg";
import sxiv_desk from "../../assets/images/portfolio/desktop/image-sxiv.jpg";

import trinity from "../../assets/images/portfolio/mobile/image-trinity.jpg";
import trinity_tab from "../../assets/images/portfolio/tablet/image-trinity.jpg";
import trinity_desk from "../../assets/images/portfolio/desktop/image-trinity.jpg";

const work = [
  {
    title: "Seraph Staion",
    madeAt: "Septembre 2019",
    images: {
      mob: seraph,
      tab: seraph_tab,
      desk: seraph_desk,
    },
  },
  {
    title: "Eebox Building",
    madeAt: "August 2017",
    images: {
      mob: eeBox,
      tab: eeBox_tab,
      desk: eeBox_desk,
    },
  },
  {
    title: "Federal II Tower",
    madeAt: "March 2007",
    images: {
      mob: federal,
      tab: federal_tab,
      desk: federal_desk,
    },
  },
  {
    title: "Project Del Sol",
    madeAt: "January 2016",
    images: {
      mob: sol,
      tab: sol_tab,
      desk: sol_desk,
    },
  },
  {
    title: "Le Prototype",
    madeAt: "October 2015",
    images: {
      mob: seraph,
      tab: seraph_tab,
      desk: seraph_desk,
    },
  },
  {
    title: "228B Tower",
    madeAt: "April 2015",
    images: {
      mob: _228b,
      tab: _228b_tab,
      desk: _228b_desk,
    },
  },
  {
    title: "Grand Edelweiss Hotel",
    madeAt: "December 2013",
    images: {
      mob: edelWise,
      tab: edelWise_tab,
      desk: edelWise_desk,
    },
  },
  {
    title: "Netcry Tower",
    madeAt: "August 2012",
    images: {
      mob: netcry,
      tab: netcry_tab,
      desk: netcry_desk,
    },
  },
  {
    title: "Hypers",
    madeAt: "January 20012",
    images: {
      mob: hypers,
      tab: hypers_tab,
      desk: hypers_desk,
    },
  },
  {
    title: "SXIV Tower",
    madeAt: "March 2011",
    images: {
      mob: sxiv,
      tab: sxiv_tab,
      desk: sxiv_desk,
    },
  },
  {
    title: "Trinity Bank Tower",
    madeAt: "September 2010",
    images: {
      mob: trinity,
      tab: trinity_tab,
      desk: trinity_desk,
    },
  },
  {
    title: "Project Paramour",
    madeAt: "February 2008",
    images: {
      mob: paramour,
      tab: paramour_tab,
      desk: paramour_desk,
    },
  },
];

export default function Portfolio() {
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);
  const renderedCard = work.map((per) => {
    return (
      <figure className="grid">
        <picture className="col-start-1 row-start-1 h-[240px] xl:h-[560px]">
          <source media="(min-width: 1280px)" srcset={per.images.desk} />
          <source media="(min-width: 640px)" srcset={per.images.tab} />
          <img src={per.images.mob} className="h-full w-full object-cover" />
        </picture>
        <div className="col-start-1 row-start-1 bg-black/40"></div>
        <figcaption className="col-start-1 row-start-1 self-end pb-[24px] pl-[24px] text-white">
          <h3 className="text-[32px] font-bold leading-[40px]">{per.title}</h3>
          <p className="text-[18px] leading-[24px]">{per.madeAt}</p>
        </figcaption>
      </figure>
    );
  });
  return (
    <main className="mx-auto grid max-w-[573px] gap-[24px] px-[32px] pb-[72px] pt-[56px] sm:px-0 sm:pb-[200px] sm:pt-0 xl:max-w-[1110px] xl:grid-cols-3 xl:pb-[160px]">
      <div ref={scrollUp} className="absolute left-0 top-0"></div>
      {renderedCard}
    </main>
  );
}
