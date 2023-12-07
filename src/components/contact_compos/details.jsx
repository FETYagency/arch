import Arrow from "../../assets/images/icons/icon-arrow";

export default function Details() {
  return (
    <section className="mb-[71px] mt-[100px] grid-cols-[350px_1fr] px-[32px] sm:px-0 xl:mb-[170px] xl:mt-[200px] xl:grid">
      <div className="mb-[68px] h-[1px] w-[65px] bg-mediumGrey xl:col-span-full xl:mb-[71px]"></div>
      <h2 className="mb-[40px] text-[48px] font-bold leading-[52px] tracking-[-1.714px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
        Contact
        <br />
        Details
      </h2>
      <ul className="flex grid-cols-2 flex-col gap-[40px] xl:grid xl:flex-row xl:gap-[30px]">
        <li className="grid-cols-2 sm:grid xl:block">
          <h4 className="col-span-full mb-[14px] text-[18px] font-bold leading-[35px] text-mediumGrey">
            Main Office
          </h4>
          <address className="mb-[43px] text-[18px] font-medium not-italic leading-[24px] text-mediumGrey">
            <span>Mail: archone@mail.com</span>
            <span>Address:1892 Chenoweth Drive TN</span>
            <span>Phone:123-456-3451</span>
          </address>
          <button className="col-start-2 row-start-2 flex items-center gap-[24px] self-center justify-self-end text-[18px] font-bold leading-[25px] text-veryDarkBlue">
            View on Map
            <span>
              <Arrow />
            </span>
          </button>
        </li>
        <li className="grid-cols-2 sm:grid xl:block">
          <h4 className="col-span-full mb-[14px] text-[18px] font-bold leading-[35px] text-mediumGrey">
            office II
          </h4>
          <address className="mb-[43px] text-[18px] font-medium not-italic leading-[24px] text-mediumGrey">
            <span>Mail: archctwo@mail.com</span>
            <span>Address:3399 Wines Lane TX</span>
            <span>Phone:832-123-4321</span>
          </address>
          <button className="col-start-2 row-start-2 flex items-center gap-[24px] self-center justify-self-end text-[18px] font-bold leading-[25px] text-veryDarkBlue">
            View on Map
            <span>
              <Arrow />
            </span>
          </button>
        </li>
      </ul>
    </section>
  );
}
