import { useEffect, useRef, useState, type CSSProperties } from "react";
import { photos, story, type Memory } from "../data/story";
import { Photo } from "../components/Photo";
import { useMobileViewport } from "../hooks/useMobileViewport";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { photoRatio } from "../utils/photoRatio";

function MemoryCopy({ memory }: { memory: Memory }) {
  return (
    <div className="memory-copy reveal">
      {memory.eyebrow && <p className="eyebrow">{memory.eyebrow}</p>}
      <h3>{memory.title}</h3>
      <div className="memory-text">
        {memory.text.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      {(memory.date || memory.location) && (
        <p className="memory-meta">
          {[memory.date, memory.location].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  );
}

export function MemoryScene({
  memory,
  year,
  index,
  total,
}: {
  memory: Memory;
  year: number | string;
  index: number;
  total: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const gallery = useRef<HTMLDivElement>(null);
  const mobile = useMobileViewport();
  const reduced = useReducedMotion();
  const carousel = mobile && memory.images.length > 1;
  const images = memory.images;
  const albumCapacity =
    memory.layout === "collage"
      ? 4
      : ["pair", "detail"].includes(memory.layout)
        ? 2
        : 1;
  const expandedGallery = images.length > albumCapacity;
  const galleryRatio = images.length
    ? Math.min(...images.map((id) => photoRatio(photos[id]?.aspectRatio)))
    : 4 / 3;
  useEffect(() => {
    if (carousel) {
      gallery.current?.scrollTo({ left: 0, behavior: "instant" });
      setPhotoIndex(0);
    }
  }, [carousel]);
  function goToPhoto(index: number) {
    const slide = gallery.current?.children[index] as HTMLElement | undefined;
    if (slide)
      gallery.current?.scrollTo({
        left: slide.offsetLeft,
        behavior: reduced ? "instant" : "smooth",
      });
  }
  const hasReveal = memory.layout === "reveal" || !!memory.interaction;
  const counter = story.ui.memoryCounter
    .replace("{current}", String(index + 1).padStart(2, "0"))
    .replace("{total}", String(total).padStart(2, "0"));
  return (
    <section
      className={`scene memory-scene layout--${memory.layout} ${memory.style?.tone === "light" ? "light-scene" : ""} ${memory.style?.alignment === "center" ? "align-center" : ""}`}
      id={memory.id}
      data-progress={year}
      data-memory={index + 1}
      aria-labelledby={`${memory.id}-label`}
      style={
        memory.style?.accent
          ? ({ "--accent": memory.style.accent } as CSSProperties)
          : undefined
      }
    >
      <div className="scene-top">
        <span className="small-label" id={`${memory.id}-label`}>
          {counter}
        </span>
        <span className="scene-rule" />
      </div>
      <div className="memory-composition">
        <MemoryCopy memory={memory} />
        {memory.images.length > 0 && (
          <div
            className={`memory-photos ${carousel ? "mobile-carousel" : ""} ${expandedGallery ? "expanded-gallery" : ""} ${hasReveal ? "has-reveal" : ""} ${hasReveal && !revealed ? "is-hidden-memory" : ""}`}
            style={{ "--gallery-ratio": galleryRatio } as CSSProperties}
          >
            <div
              className="photo-group"
              id={`${memory.id}-photos`}
              ref={gallery}
              role={carousel ? "group" : undefined}
              aria-label={carousel ? story.ui.photoCarousel : undefined}
              tabIndex={carousel ? 0 : undefined}
              onScroll={(event) => {
                if (!carousel) return;
                const node = event.currentTarget;
                const slides = Array.from(node.children) as HTMLElement[];
                const nearest = slides.reduce(
                  (best, slide, i) =>
                    Math.abs(slide.offsetLeft - node.scrollLeft) <
                    Math.abs(slides[best].offsetLeft - node.scrollLeft)
                      ? i
                      : best,
                  0,
                );
                setPhotoIndex(nearest);
              }}
              onKeyDown={(event) => {
                if (
                  !carousel ||
                  !["ArrowLeft", "ArrowRight"].includes(event.key)
                )
                  return;
                event.preventDefault();
                goToPhoto(
                  Math.max(
                    0,
                    Math.min(
                      images.length - 1,
                      photoIndex + (event.key === "ArrowRight" ? 1 : -1),
                    ),
                  ),
                );
              }}
            >
              {images.map((id, i) => (
                <div
                  className={`photo-wrap reveal photo-wrap--${i + 1}`}
                  key={id}
                  style={{ "--delay": `${i * 140}ms` } as CSSProperties}
                >
                  <Photo id={id} />
                </div>
              ))}
            </div>
            {carousel && (
              <div className="carousel-controls">
                <span className="carousel-hint">{story.ui.swipePhotos}</span>
                <div className="carousel-dots">
                  {images.map((id, i) => (
                    <button
                      key={id}
                      onClick={() => goToPhoto(i)}
                      aria-label={story.ui.goToPhoto
                        .replace("{current}", String(i + 1))
                        .replace("{total}", String(images.length))}
                      aria-pressed={photoIndex === i}
                    >
                      <span aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <span className="carousel-count" role="status">
                  {story.ui.photoCounter
                    .replace("{current}", String(photoIndex + 1))
                    .replace("{total}", String(images.length))}
                </span>
              </div>
            )}
            {hasReveal && (
              <div className={`memory-cover ${revealed ? "is-open" : ""}`}>
                <p aria-hidden={revealed}>
                  {memory.interaction?.prompt || story.easterEgg.label}
                </p>
                <button
                  className="text-link"
                  onClick={() => setRevealed((value) => !value)}
                  aria-expanded={revealed}
                  aria-controls={`${memory.id}-photos`}
                >
                  {revealed
                    ? story.ui.hideMemory
                    : memory.interaction?.button || story.ui.nextChapter}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {hasReveal && (
        <p
          id={`${memory.id}-revealed`}
          className={`revealed-caption ${revealed ? "is-shown" : ""}`}
          aria-live="polite"
        >
          {revealed ? memory.interaction?.revealedText : ""}
        </p>
      )}
    </section>
  );
}
