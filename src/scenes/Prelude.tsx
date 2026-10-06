import type { CSSProperties } from "react";
import { story } from "../data/story";
import { MemoryScene } from "./MemoryScene";

export function Prelude() {
  return story.prelude.map((group) => (
    <div
      className="chapter prelude"
      key={group.id}
      style={{ "--accent": group.accent } as CSSProperties}
    >
      {group.memories.map((memory, index) => (
        <MemoryScene
          key={memory.id}
          memory={memory}
          year={group.id}
          index={index}
          total={group.memories.length}
        />
      ))}
    </div>
  ));
}
