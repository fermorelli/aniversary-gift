import { Opening } from "./scenes/Opening";
import { useEffect } from "react";
import { Chapter } from "./scenes/Chapter";
import { Ending } from "./scenes/Ending";
import { StoryChrome } from "./components/StoryChrome";
import { EasterEgg } from "./components/EasterEgg";
import { SceneAdvance } from "./components/SceneAdvance";
import { Prelude } from "./scenes/Prelude";
import { story, years } from "./data/story";

export default function App() {
  useEffect(() => {
    document.title = story.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", story.meta.description);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <StoryChrome />
      <main>
        <Opening />
        <Prelude />
        {years.map((chapter, i) => (
          <Chapter
            key={chapter.id}
            chapter={chapter}
            nextId={years[i + 1]?.id || "lo-que-sigue"}
          />
        ))}
        <Ending />
      </main>
      <SceneAdvance />
      <EasterEgg />
    </>
  );
}
