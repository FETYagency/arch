import heritage_desk from "../../assets/images/about/desktop/image-heritage.jpg";
export default function Heritage() {
  return (
    <figcaption className="mb-[112px] mt-[76px] grid-cols-[1fr_540px] gap-[124px] px-[32px] sm:my-[200px] xl:grid">
      <figcaption>
        <div className="mb-[68px] h-[1px] w-[65px] bg-mediumGrey sm:mb-[49px] xl:mb-[82px]"></div>
        <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
          Our
          <br /> Heritage
        </h2>
        <p className="mt-[21px] text-[18px] font-medium leading-[24px] text-mediumGrey sm:mt-[62px] xl:mt-[51px]">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country. Speciliazing in Urban
          Design allowed us to focus on creating exceptional structures that
          live in harmony with their surroundings. We consider every detail from
          every surrounding element to inform our designs. Our small team of
          world-class professionals provides input on every project.
        </p>
      </figcaption>
      <div className="hidden xl:block xl:h-[540px]">
        <img src={heritage_desk} className="h-full w-full object-cover" />
      </div>
    </figcaption>
  );
}
