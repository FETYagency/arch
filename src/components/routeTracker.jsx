import { useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import { getSnapShot, subscriber } from "../utls/isMobile";
export default function RoutTracker() {
  let isMobile = useSyncExternalStore(subscriber, getSnapShot);
  let { pathname } = useLocation();
  let output = decodeURIComponent(pathname.replace(/^\//, "")) || "home";
  return (
    <>
      {!isMobile && (
        <div className="absolute left-[38px] top-0 flex items-center gap-[48px] text-[19px] font-medium leading-[24px] tracking-[18px] text-lightGrey [writing-mode:vertical-rl] xl:left-[63px]">
          <div className="h-[104px] w-[2px] bg-current"></div>
          <h3 className="uppercase">{output}</h3>
        </div>
      )}
    </>
  );
}
