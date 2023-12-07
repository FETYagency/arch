import Arrow from "../../assets/images/icons/icon-arrow";
export default function FormBtn({ className }) {
  return (
    <button
      type="submit"
      className={
        "grid aspect-square w-[80px] place-items-center items-center bg-veryDarkBlue text-white hover:bg-mediumGrey active:bg-veryLightGrey" +
        ` ${className}`
      }
    >
      <Arrow width={24} height={18} />
    </button>
  );
}
