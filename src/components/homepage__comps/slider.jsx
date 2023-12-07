import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import NavBtn from "../ui/nabBtn";
import BtnSlider from "../ui/buttonSlider";
import { getSnapShot, subscriber } from "../../utls/isDesktop";

export default function Slider({ slides = [] }) {
  let isDesktop = useSyncExternalStore(subscriber, getSnapShot);
  let [currentIndex, setCurrentIndex] = useState(0);
  const sliderEle = useRef(null);
  const renderedSlides = slides.map((per) => {
    return (
      <picture
        key={per.title}
        style={{ translate: `${-100 * currentIndex}%` }}
        className="w-full shrink-0 grow-0 transition-all"
      >
        <source media="(min-width: 1280px)" srcset={per.images.desk} />
        <source media="(min-width: 640px)" srcset={per.images.tab} />
        <img src={per.images.mob} className="h-full w-full object-cover" />
      </picture>
    );
  });
  const renderedButton = slides.map((per, i) => {
    return (
      <BtnSlider
        content={"0" + (i + 1)}
        isActive={i === currentIndex}
        handler={setCurrentIndex}
        index={i}
      />
    );
  });
  useEffect(() => {
    console.log("run");
    let intervalId;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          if (isIntersecting) {
            intervalId = setInterval(() => {
              setCurrentIndex((prev) => {
                let isLastIndex = prev === slides.length - 1;
                let nextIndex = isLastIndex ? 0 : ++prev;
                return nextIndex;
              });
            }, 6000);
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      },
    );
    observer.observe(sliderEle.current);
    return () => {
      console.log("cleaned");
      if (sliderEle.current) {
        observer.unobserve(sliderEle.current);
      }
      clearInterval(intervalId);
    };
  }, [sliderEle.current]);
  return (
    <div ref={sliderEle} className="relative grid h-[560px] sm:h-[720px]">
      <div className="col-start-1 row-start-1 flex overflow-hidden">
        {renderedSlides}
      </div>
      <div className="z-10 col-start-1 row-start-1 bg-black/50"></div>
      <article className="z-10 col-start-1 row-start-1 max-w-[544px] px-[32px] pt-[116px] text-white sm:px-[58px] sm:pt-[168px] xl:ml-[190px] xl:pl-[0px] xl:pt-[186px]">
        <div className="min-h-[269px] sm:min-h-[279px]">
          <h2 className="text-[48px] font-bold leading-[48px] tracking-[-1.2px] sm:text-[96px] sm:leading-[80px] sm:tracking-[-2px]">
            {slides[currentIndex].title}
          </h2>
          <p className="leaidng-[24px] mb-[20px] mt-[11px] text-[18px] font-medium">
            {slides[currentIndex].description}
          </p>
        </div>
        <NavBtn to={"/portfolio"} text={"See Our Portfolio"} />
      </article>
      {isDesktop && (
        <div className="absolute bottom-0 left-[-80px] z-40 flex">
          {renderedButton}
        </div>
      )}
    </div>
  );
}
