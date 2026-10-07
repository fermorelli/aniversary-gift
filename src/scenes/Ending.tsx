import { useEffect, useRef, useState, type CSSProperties } from "react";
import { story } from "../data/story";
import { Photo } from "../components/Photo";
import { Letter } from "../components/Letter";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Ending() {
  const { ending } = story;
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const firstMessage = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (firstMessage.current) observer.observe(firstMessage.current);
    return () => observer.disconnect();
  }, [reduced]);
  useEffect(() => {
    if (reduced) {
      setPhase(ending.messages.length);
      setUnlocked(true);
      return;
    }
    if (!started) return;
    if (phase < ending.messages.length) {
      const timer = window.setTimeout(
        () => setPhase((value) => value + 1),
        ending.messageDuration,
      );
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(
      () => setUnlocked(true),
      ending.unlockDuration,
    );
    return () => window.clearTimeout(timer);
  }, [started, phase, ending, reduced]);
  return (
    <>
      <section
        id="lo-que-sigue"
        className={`ending-intro scene ${reduced ? "ending-reduced" : ""}`}
        data-progress="final"
        aria-labelledby="next-year-title"
        style={
          {
            "--phrase-duration": `${ending.messageDuration}ms`,
          } as CSSProperties
        }
      >
        <div className="ending-sequence" aria-live="polite">
          {reduced && (
            <div className="reduced-messages">
              {ending.messages.map((message, i) => (
                <p key={i}>{message}</p>
              ))}
            </div>
          )}
          {!reduced && phase < ending.messages.length && (
            <p
              key={phase}
              ref={phase === 0 ? firstMessage : undefined}
              className={`ending-message ${phase > 0 ? "fade-in" : ""}`}
            >
              {ending.messages[phase]}
            </p>
          )}
          <div
            className={`next-year ${phase >= ending.messages.length ? "is-ready" : ""}`}
          >
            <p className="eyebrow">{ending.eyebrow}</p>
            <h2 id="next-year-title">{ending.title}</h2>
            <p
              className={`unlock-state small-label ${unlocked ? "is-unlocked" : ""}`}
            >
              <span className="unlock-symbol" aria-hidden="true">
                {unlocked ? "✳" : "· · ·"}
              </span>
              {unlocked ? ending.unlocked : ending.loading}
            </p>
            <p className="ending-subtitle">{ending.subtitle}</p>
            <p className="continuation">{ending.continuation}</p>
          </div>
        </div>
      </section>
      <Letter />
      <section className="farewell scene" data-progress="final">
        <div className="final-photo reveal">
          <Photo id={ending.image} />
        </div>
        <div className="farewell-copy reveal">
          <p className="eyebrow">{ending.note}</p>
          <h2>{ending.farewell}</h2>
          <p>{story.meta.signature}</p>
          <a className="text-link" href="#inicio">
            {story.ui.restart}
          </a>
        </div>
      </section>
    </>
  );
}
