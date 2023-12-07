export default function ContactInput({
  placeHolder = "textBox 1",
  type = "text",
}) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeHolder}
        required
        className="peer h-[44px] w-full  resize-none border-b border-veryDarkBlue pl-[34px] text-[20px] font-bold leading-normal tracking-[-0.312px] text-veryDarkBlue outline-none placeholder:text-mediumGrey invalid:border-redError invalid:placeholder:text-redError focus:border-b-[3px]"
      ></input>
      <span className="absolute bottom-[15px] right-[16px] hidden text-[18px] font-bold leading-normal tracking-[-0.281px] text-redError peer-invalid:block">
        Can't be empty
      </span>
    </div>
  );
}
