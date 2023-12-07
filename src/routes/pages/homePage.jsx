import paramour from "../../assets/images/home/mobile/image-hero-paramour.jpg";
import paramour_tab from "../../assets/images/home/tablet/image-hero-paramour.jpg";
import paramour_desk from "../../assets/images/home/desktop/image-hero-paramour.jpg";

import seraph from "../../assets/images/home/mobile/image-hero-seraph.jpg";
import seraph_tab from "../../assets/images/home/tablet/image-hero-seraph.jpg";
import seraph_desk from "../../assets/images/home/desktop/image-hero-seraph.jpg";

import federal from "../../assets/images/home/mobile/image-hero-federal.jpg";
import federal_tab from "../../assets/images/home/tablet/image-hero-federal.jpg";
import federal_desk from "../../assets/images/home/desktop/image-hero-federal.jpg";

import trinity from "../../assets/images/home/mobile/image-hero-trinity.jpg";
import trinity_tab from "../../assets/images/home/tablet/image-hero-trinity.jpg";
import trinity_desk from "../../assets/images/home/desktop/image-hero-trinity.jpg";
import Slider from "../../components/homepage__comps/slider";
import Welcome from "../../components/homepage__comps/welcome";
import Block from "../../components/homepage__comps/block";
import Featured from "../../components/homepage__comps/featured";

const slides = [
  {
    title: "project paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    images: {
      mob: paramour,
      tab: paramour_tab,
      desk: paramour_desk,
    },
  },
  {
    title: "seraph station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    images: {
      mob: seraph,
      tab: seraph_tab,
      desk: seraph_desk,
    },
  },
  {
    title: "federal II tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    images: {
      mob: federal,
      tab: federal_tab,
      desk: federal_desk,
    },
  },
  {
    title: "trinity bank tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    images: {
      mob: trinity,
      tab: trinity_tab,
      desk: trinity_desk,
    },
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[573px] xl:max-w-[1110px]">
      <Slider slides={slides} />
      <Welcome />
      <Block />
      <Featured />
    </main>
  );
}
