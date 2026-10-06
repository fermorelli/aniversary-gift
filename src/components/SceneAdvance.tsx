import { useEffect, useState } from "react";
import { story } from "../data/story";
import { useReducedMotion } from "../hooks/useReducedMotion";

type AdvanceTarget = {
  top: number;
  continues: boolean;
  light: boolean;
  scene: HTMLElement;
};

function findTarget(): AdvanceTarget | null {
  const scenes = Array.from(
    document.querySelectorAll<HTMLElement>("main .opening, main .scene"),
  );
  const currentIndex = scenes.findIndex(
    (scene) => scene.getBoundingClientRect().bottom > 96,
  );
  const current = scenes[currentIndex];
  if (!current) return null;
  const rect = current.getBoundingClientRect();
  const bottomScene = scenes.find((scene) => {
    const r = scene.getBoundingClientRect();
    return (
      r.top <= window.innerHeight - 44 && r.bottom > window.innerHeight - 44
    );
  });
  const light = bottomScene?.classList.contains("light-scene") || false;
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const targetFor = (top: number, scene: HTMLElement, continues: boolean) => {
    const clampedTop = Math.max(0, Math.min(top, maxScroll));
    if (clampedTop <= window.scrollY + 2) return null;
    return { top: clampedTop, scene, continues, light };
  };
  // When free scrolling leaves the next scene partly visible, align it first.
  if (rect.top > 24) {
    return targetFor(window.scrollY + rect.top, current, false);
  }
  // A longer scene is read in viewport-sized steps before moving to its successor.
  const lastPage = window.scrollY + rect.bottom - window.innerHeight;
  if (rect.top <= 24 && lastPage > window.scrollY + 20) {
    return targetFor(
      Math.min(window.scrollY + window.innerHeight - 96, lastPage),
      current,
      true,
    );
  }
  const next = scenes[currentIndex + 1];
  if (!next) return null;
  return targetFor(
    window.scrollY + next.getBoundingClientRect().top,
    next,
    false,
  );
}

export function SceneAdvance() {
  const [target, setTarget] = useState<AdvanceTarget | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setTarget(findTarget());
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!target) return null;
  const label = target.continues ? story.ui.continueScene : story.ui.nextScene;
  return (
    <button
      className={`scene-advance ${target.light ? "scene-advance--light" : ""}`}
      aria-label={label}
      title={label}
      onClick={() => {
        const destination = findTarget();
        if (destination) {
          destination.scene.tabIndex = -1;
          destination.scene.focus({ preventScroll: true });
          window.scrollTo({
            top: Math.round(destination.top),
            behavior: reduced ? "instant" : "smooth",
          });
        }
      }}
    >
      <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
        <path
          d="M12 4v15M6 13l6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
