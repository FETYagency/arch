import mob from "../../assets/images/home/mobile/image-small-team.jpg";
import tab from "../../assets/images/home/tablet/image-small-team.jpg";
import desk from "../../assets/images/home/desktop/image-small-team.jpg";
import NavBtn from "../ui/nabBtn";
export default function Block() {
  return (
    <div className="grid">
      <picture className="col-start-1 row-start-1 h-[560px]">
        <source media="(min-width: 1280px)" srcset={desk} />
        <source media="(min-width: 640px)" srcset={tab} />
        <img src={mob} className="h-full w-full object-cover" />
      </picture>
      <div className="col-start-1 row-start-1 bg-black/50"></div>
      <article className="xl-[176px] col-start-1 row-start-1 px-[32px] pt-[181px] text-white sm:pl-[58px] sm:pr-0 sm:pt-[167px] xl:ml-[190px] xl:pl-0">
        <h3 className="mb-[23px] text-[48px] font-bold leading-[52px] tracking-[-1.714px] sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
          Small team,
          <br />
          big ideas
        </h3>
        <NavBtn to={"/about us"} text={"About Us"} />
      </article>
    </div>
  );
}
