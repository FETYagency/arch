export default function BtnSlider({
  content = "01",
  isActive = false,
  index,
  handler,
}) {
  return (
    <button
      type="submit"
      onClick={() => handler(index)}
      className={`${
        isActive
          ? "bg-veryDarkBlue text-white"
          : "bg-white text-black hover:bg-veryLightGrey"
      }  grid aspect-square w-[80px] place-items-center items-center text-[18px] font-bold leading-[25px]`}
    >
      {content}
    </button>
  );
}
