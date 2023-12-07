import jake from "../../assets/images/about/desktop/avatar-jake.jpg";
import jackson from "../../assets/images/about/desktop/avatar-jackson.jpg";
import maria from "../../assets/images/about/desktop/avatar-maria.jpg";
import thompson from "../../assets/images/about/desktop/avatar-thompson.jpg";
import Card from "../ui/card";
const leaders = [
  {
    image: jake,
    name: "Chief Architect",
    role: "Jake Richards",
  },
  {
    image: jackson,
    name: "Jackson Rourke",
    role: "Lead Designer",
  },
  {
    image: thompson,
    name: "Thompson Smith",
    role: "Head of Finance",
  },
  {
    image: maria,
    name: "Maria Simpson",
    role: "Senior Architect",
  },
];
export default function Leader() {
  const renderedLeaders = leaders.map((per) => {
    return <Card per={per} />;
  });
  return (
    <section className="mb-[111px] px-[32px] sm:px-0 xl:flex justify-between">
      <div className="mb-[56px] text-[48px] font-bold leading-[52px] tracking-[-1.714px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px]">
        The
        <br />
        Leaders
      </div>
      <div className="grid gap-[79px] sm:grid-cols-2 sm:gap-[62px_8px] xl:gap-[62px_24px]">
        {renderedLeaders}
      </div>
    </section>
  );
}
