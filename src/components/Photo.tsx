import { useState, type CSSProperties } from "react";
import { photos, story } from "../data/story";
import { publicAsset } from "../utils/publicAsset";
import { photoRatio } from "../utils/photoRatio";

export function Photo({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const photo = photos[id];
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const placeholder = !photo || photo.src.startsWith("FOTO_");
  const failed = failedSrc === photo?.src;
  const style = {
    aspectRatio: photo?.aspectRatio || "4 / 3",
    "--photo-ratio": photoRatio(photo?.aspectRatio),
    "--crop": photo?.position || "50% 50%",
  } as CSSProperties;
  return (
    <figure
      className={`photo photo--${photo?.tone || "olive"} ${className}`}
      style={style}
    >
      {placeholder || failed ? (
        <div
          className="photo-placeholder"
          role="img"
          aria-label={
            failed ? story.ui.imageError : `${story.ui.photograph}: ${id}`
          }
        >
          <span className="crop-marks" aria-hidden="true" />
          <span className="photo-id">{failed ? story.ui.imageError : id}</span>
        </div>
      ) : (
        <img
          src={publicAsset(photo.src)}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          srcSet={photo.srcSet
            ?.split(",")
            .map((candidate) => {
              const [src, descriptor] = candidate.trim().split(/\s+/);
              return `${publicAsset(src)} ${descriptor || ""}`;
            })
            .join(", ")}
          sizes={photo.sizes || "(max-width: 700px) 90vw, 65vw"}
          onError={() => setFailedSrc(photo.src)}
        />
      )}
    </figure>
  );
}
