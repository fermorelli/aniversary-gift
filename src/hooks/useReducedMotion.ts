import { useSyncExternalStore } from "react";

const media = window.matchMedia("(prefers-reduced-motion: reduce)");
const subscribe = (callback: () => void) => {
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => media.matches);
}
