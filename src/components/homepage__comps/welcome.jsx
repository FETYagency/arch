import welcome from "../../assets/images/home/desktop/image-welcome.jpg";
export default function Welcome() {
  return (
    <section className="px-[33px] pb-[113px] pt-[71px] sm:px-0 sm:pb-[233px] sm:pt-[0px] xl:grid xl:pt-[195px]">
      <div className="col-start-1 row-start-1 hidden h-[568px] w-[350px] place-self-end xl:block">
        <img src={welcome} className="h-full w-full object-cover" />
      </div>
      <h2 className="relative top-[100px] leading-normal col-start-1 row-start-1 hidden place-self-start text-[120px]  font-bold capitalize tracking-[-3px] text-veryLightGrey sm:block xl:top-[10px] xl:text-[250px] xl:leading-[0px] xl:tracking-[-5px]">
        Welcome
      </h2>
      <article className="relative col-start-1 row-start-1 self-end pt-[68px] xl:ml-[190px] xl:max-w-[446px]">
        <span className="absolute left-0 top-0 inline-block h-[1px] w-[65px] bg-lightGrey sm:hidden"></span>
        <h3 className="text-[48px] font-bold leading-[52px] tracking-[-1.714px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
          Welcome to <br /> Arch Studio
        </h3>
        <p className="mt-[22px] text-[18px] font-medium leading-[24px] text-mediumGrey xl:mt-[43px]">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
          <hr className="hidden h-[20px] border-transparent xl:block" /> Over
          the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
          <hr className="hidden h-[20px] border-transparent xl:block" /> We work
          closely with our clients so that we understand the intricacies of each
          project. This allows us to work in harmony the surrounding area to
          create truly stunning projects that will stand the test of time.
        </p>
      </article>
    </section>
  );
}
