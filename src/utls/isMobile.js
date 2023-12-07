const media = window.matchMedia("(max-width:639px)");
export const subscriber = (callback) => {
  media.addEventListener("change", callback);
  return () => {
    media.removeEventListener("change", callback);
  };
};
export const getSnapShot = () => {
  return media.matches;
};
