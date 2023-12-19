import Hero from "../../components/aboutUs_comps/hero";
import team from "../../assets/images/about/mobile/image-hero.jpg";
import team_tab from "../../assets/images/about/tablet/image-hero.jpg";
import team_desk from "../../assets/images/about/desktop/image-hero.jpg";
import Heritage from "../../components/aboutUs_comps/heritage";
import Leader from "../../components/aboutUs_comps/leaders";
import { useEffect, useRef } from "react";
const imagesAboutUs = {
  label: "About",
  header: "Your team of professionals",
  para: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",

  images: {
    mob: team,
    desk: team_desk,
    tab: team_tab,
  },
};

export default function AboutUs() {
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);
  return (
    <main className="mx-auto max-w-[573px] xl:max-w-[1110px]">
      <div ref={scrollUp} className="absolute left-0 top-0"></div>
      <Hero per={imagesAboutUs} />
      <Heritage />
      <Leader />
    </main>
  );
}
