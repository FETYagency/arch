import ContactInput from "../ui/input";
import ContactTextArea from "../ui/textArea";
import FormBtn from "../ui/formBtn";
export default function ContactForm() {
  return (
    <section className="my-[72px] grid-cols-[350px_1fr] px-[32px] xl:mb-[160px] xl:mt-[130px] xl:grid">
      <h2 className="mb-[42px] text-[42px] font-bold leading-[52px] tracking-[-1.714px] text-veryDarkBlue sm:text-[72px] sm:leading-[64px] sm:tracking-[-2px] xl:mb-0">
        Connect <br className="sm:hidden xl:block" />
        with us
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-[43px]">
          <ContactInput placeHolder="Name" type="text" />
          <ContactInput placeHolder="Email" type="email" />
          <ContactTextArea placeHolder="Message" />
        </div>
        <FormBtn className={"ml-auto"} />
      </form>
    </section>
  );
}
