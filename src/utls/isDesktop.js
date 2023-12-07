const media = window.matchMedia("(min-width:1280px)");
export const subscriber = (callback) => {
  media.addEventListener("change", callback);
  return () => {
    media.removeEventListener("change", callback);
  };
};
export const getSnapShot = () => {
  return media.matches;
};
