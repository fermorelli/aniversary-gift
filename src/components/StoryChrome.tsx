import { useEffect, useRef, useState } from "react";
import { story, years } from "../data/story";
import { publicAsset } from "../utils/publicAsset";

export function StoryChrome() {
  const [activeYear, setActiveYear] = useState("");
  const [memory, setMemory] = useState("");
  const [light, setLight] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioMessage, setAudioMessage] = useState("");
  const audio = useRef<HTMLAudioElement | null>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        const fraction = height > 0 ? window.scrollY / height : 0;
        if (progress.current)
          progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, fraction))})`;
        const anchor = window.innerHeight * 0.45;
        const scenes = Array.from(
          document.querySelectorAll<HTMLElement>("[data-progress]"),
        ).map((scene) => ({ scene, rect: scene.getBoundingClientRect() }));
        const current = scenes.find(
          ({ rect }) => rect.top <= anchor && rect.bottom > anchor,
        )?.scene;
        const headerScene = scenes.find(
          ({ rect }) => rect.top <= 48 && rect.bottom > 48,
        )?.scene;
        setActiveYear(current?.dataset.progress || "");
        setMemory(current?.dataset.memory || "");
        setLight(headerScene?.classList.contains("light-scene") || false);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const src = story.audio.src;
    if (!src) return;
    const element = new Audio(publicAsset(src));
    element.preload = "none";
    element.loop = true;
    element.volume = story.audio.volume;
    audio.current = element;
    const onError = () => {
      setPlaying(false);
      setAudioMessage(story.ui.soundError);
    };
    element.addEventListener("error", onError);
    return () => {
      element.pause();
      element.removeEventListener("error", onError);
      audio.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioMessage) return;
    const timer = window.setTimeout(() => setAudioMessage(""), 4000);
    return () => window.clearTimeout(timer);
  }, [audioMessage]);

  async function toggleAudio() {
    if (!audio.current) {
      setAudioMessage(story.ui.soundUnavailable);
      return;
    }
    if (playing) {
      audio.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.current.play();
      setPlaying(true);
      setAudioMessage("");
    } catch {
      setPlaying(false);
      setAudioMessage(story.ui.soundError);
    }
  }
  const chapter = years.find((item) => String(item.number) === activeYear);
  const section =
    chapter || story.prelude.find((item) => item.id === activeYear);
  const memoryLabel =
    section && memory
      ? story.ui.memoryCounter
          .replace("{current}", memory)
          .replace("{total}", String(section.memories.length))
      : "";
  return (
    <>
      <a href={`#${story.opening.startId}`} className="skip-link">
        {story.ui.skip}
      </a>
      <div className={`story-chrome ${light ? "chrome-light" : ""}`}>
        <div className="progress-track" aria-hidden="true">
          <div ref={progress} className="progress-fill" />
        </div>
        <div
          className={`chapter-progress ${activeYear ? "is-visible" : ""}`}
          aria-label={story.ui.progress}
        >
          <span className="small-label">
            {section?.label || story.ui.finalProgress}
          </span>
          {chapter && (
            <nav aria-label={story.ui.chapterNavigation}>
              {years.map((year) => (
                <a
                  key={year.id}
                  href={`#${year.id}`}
                  aria-label={year.label}
                  aria-current={
                    chapter.number === year.number ? "step" : undefined
                  }
                >
                  {String(year.number).padStart(2, "0")}
                </a>
              ))}
            </nav>
          )}
          {memoryLabel && <span className="chrome-memory">{memoryLabel}</span>}
        </div>
        <button
          className={`sound-button ${playing ? "is-playing" : ""}`}
          onClick={toggleAudio}
          aria-label={playing ? story.ui.soundOn : story.ui.soundOff}
          aria-pressed={playing}
        >
          <span className="sound-bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>{playing ? story.ui.soundOn : story.ui.soundOff}</span>
        </button>
        <p
          className={`audio-message ${audioMessage ? "is-visible" : ""}`}
          role="status"
        >
          {audioMessage}
        </p>
      </div>
    </>
  );
}
