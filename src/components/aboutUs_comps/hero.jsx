export default function Hero({ per, header, para, label }) {
  return (
    <section className="grid">
      <picture className="col-start-1 row-start-1 h-[240px] sm:h-[720px] xl:max-w-[635px]">
        <source media="(min-width: 1280px)" srcset={per.images.desk} />
        <source media="(min-width: 640px)" srcset={per.images.tab} />
        <img src={per.images.mob} className="h-full w-full object-cover" />
      </picture>
      <div className="col-start-1 row-start-1 h-[45px] self-end pr-[32px] sm:h-full sm:max-w-none sm:bg-black/40 xl:max-w-[635px]">
        <div className="h-full bg-white sm:hidden"></div>
      </div>
      <article className="col-start-1 pr-[32px] pt-[20px] sm:row-start-1 sm:place-self-end sm:pl-[59px] sm:pr-0 xl:pl-[482px]">
        <div className="bg-white pl-[32px] sm:pl-[59px] sm:pt-[88px] xl:pl-[182px] xl:pt-[160px]">
          <div className="mb-[73px] hidden h-[1px] w-[65px] bg-mediumGrey sm:block xl:mb-[57px]"></div>
          <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
            {per.header}
          </h2>
          <p className="mt-[21px] text-[18px] font-medium leading-[24px] text-mediumGrey sm:mt-[38px]">
            {per.para}
          </p>
        </div>
      </article>
      <h1 className="col-start-1 row-start-1 mt-[210px] hidden justify-self-end text-[120px] font-bold leading-[200px] tracking-[-3px] text-veryLightGrey sm:block xl:mt-[150px] xl:text-[250px]">
        {per.label}
      </h1>
    </section>
  );
}
