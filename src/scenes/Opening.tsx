import { useEffect, useState, type CSSProperties } from "react";
import { story, years } from "../data/story";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Opening() {
  const { opening, meta } = story;
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (reduced || phase >= opening.messages.length) return;
    const timer = window.setTimeout(
      () => setPhase((value) => value + 1),
      opening.messageDuration,
    );
    return () => window.clearTimeout(timer);
  }, [phase, opening, reduced]);

  return (
    <section
      className="opening"
      id="inicio"
      aria-label={meta.dedication}
      style={
        { "--phrase-duration": `${opening.messageDuration}ms` } as CSSProperties
      }
    >
      <div className="opening-top">
        <span className="dedication">
          {meta.dedication}
          <span className="tiny-star" aria-hidden="true">
            ✳
          </span>
        </span>
        <span className="small-label">{opening.footer}</span>
      </div>
      <div className="opening-body">
        <p className="eyebrow">{opening.eyebrow}</p>
        {reduced && (
          <div className="reduced-messages">
            {opening.messages.map((message, i) => (
              <p key={i}>{message}</p>
            ))}
          </div>
        )}
        <div className="opening-sequence">
          {!reduced && phase < opening.messages.length ? (
            <p key={phase} className="opening-message fade-in">
              {opening.messages[phase]}
            </p>
          ) : (
            <h1 className="fade-in">
              {opening.title}
              <br />
              <em>{opening.titleAccent}</em>
            </h1>
          )}
        </div>
        <p className="opening-description">{opening.description}</p>
        <a className="text-link start-link" href={`#${opening.startId}`}>
          {opening.button}
          <span className="link-line" aria-hidden="true" />
        </a>
      </div>
      <span className="opening-number" aria-hidden="true">
        {opening.number}
      </span>
      <div className="opening-bottom">
        <span className="small-label">{meta.signature}</span>
        <span className="scroll-hint">
          <span className="scroll-line" aria-hidden="true" />
          {opening.scrollHint}
        </span>
        <span className="small-label opening-counter">
          01 — {String(years.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
