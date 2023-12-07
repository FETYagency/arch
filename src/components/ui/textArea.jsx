export default function ContactTextArea({ placeHolder = "textBox 2" }) {
  return (
    <div className="relative h-[96px]">
      <textarea
        placeholder={placeHolder}
        required
        className="peer h-full w-full  resize-none border-b border-veryDarkBlue pl-[34px] text-[20px] font-bold leading-normal tracking-[-0.312px] text-veryDarkBlue outline-none placeholder:text-mediumGrey invalid:border-redError invalid:placeholder:text-redError focus:border-b-[3px]"
      ></textarea>
      <span className="absolute bottom-[18px] right-[16px] hidden text-[18px] font-bold leading-normal tracking-[-0.281px] text-redError peer-invalid:block">
        Can't be empty
      </span>
    </div>
  );
}
