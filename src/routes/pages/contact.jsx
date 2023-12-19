import { useRef, useEffect } from "react";

import Hero from "../../components/aboutUs_comps/hero";

import team from "../../assets/images/contact/mobile/image-hero.jpg";
import team_tab from "../../assets/images/contact/tablet/image-hero.jpg";
import team_desk from "../../assets/images/contact/desktop/image-hero.jpg";

import map from "../../assets/images/contact/mobile/image-map.png";
import map_tab from "../../assets/images/contact/tablet/image-map.png";
import map_desk from "../../assets/images/contact/desktop/image-map.png";

import Details from "../../components/contact_compos/details";
import ContactForm from "../../components/aboutUs_comps/form";

const imagesAboutUs = {
  label: "Contact",
  header: "Tell us about your project",
  para: "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",

  images: {
    mob: team,
    desk: team_desk,
    tab: team_tab,
  },
};

export default function Contact() {
  const scrollUp = useRef(null);
  useEffect(() => {
    scrollUp.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);
  return (
    <main className="mx-auto max-w-[573px] xl:max-w-[1110px]">
      <div ref={scrollUp} className="absolute left-0 top-0"></div>
      <Hero per={imagesAboutUs} />
      <Details />
      <picture>
        <source media="(min-width: 1280px)" srcset={map_desk} />
        <source media="(min-width: 640px)" srcset={map_tab} />
        <img src={map} className="h-full w-full object-cover" />
      </picture>
      <ContactForm />
    </main>
  );
}
