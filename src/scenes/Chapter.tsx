import type { CSSProperties } from "react";
import { story, type Chapter as ChapterContent } from "../data/story";
import { MemoryScene } from "./MemoryScene";

export function Chapter({
  chapter,
  nextId,
}: {
  chapter: ChapterContent;
  nextId: string;
}) {
  return (
    <div
      className="chapter"
      style={{ "--accent": chapter.accent } as CSSProperties}
    >
      <section
        className="chapter-intro scene"
        data-progress={chapter.number}
        id={chapter.id}
        aria-labelledby={`${chapter.id}-title`}
      >
        <span className="chapter-number reveal" aria-hidden="true">
          {String(chapter.number).padStart(2, "0")}
        </span>
        <div className="chapter-copy reveal">
          <p className="eyebrow">{chapter.label}</p>
          <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
          <p className="chapter-description">{chapter.intro}</p>
          <p className="chapter-note small-label">{chapter.note}</p>
        </div>
        <span className="chapter-spine" aria-hidden="true" />
      </section>
      {chapter.memories.map((memory, index) => (
        <MemoryScene
          key={memory.id}
          memory={memory}
          year={chapter.number}
          index={index}
          total={chapter.memories.length}
        />
      ))}
      <section
        className="chapter-transition scene"
        data-progress={chapter.number}
      >
        <div className="reveal">
          <span className="transition-mark" aria-hidden="true">
            ✳
          </span>
          <p className="transition-text">{chapter.transition.text}</p>
          <p className="eyebrow">{chapter.transition.state}</p>
          <a className="text-link" href={`#${nextId}`}>
            {story.ui.nextChapter}
          </a>
        </div>
      </section>
    </div>
  );
}
