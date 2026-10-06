import { useSyncExternalStore } from "react";

const media = window.matchMedia(
  "(max-width: 700px), (max-width: 1000px) and (hover: none) and (pointer: coarse)",
);
const subscribe = (callback: () => void) => {
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
export function useMobileViewport() {
  return useSyncExternalStore(subscribe, () => media.matches);
}
