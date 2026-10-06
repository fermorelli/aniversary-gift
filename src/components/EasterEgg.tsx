import { useRef } from "react";
import { story } from "../data/story";
import { Photo } from "./Photo";

export function EasterEgg() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={trigger}
        className="secret-trigger"
        onClick={() => dialog.current?.showModal()}
        aria-label={story.easterEgg.label}
      >
        ✳
      </button>
      <dialog
        ref={dialog}
        className="secret-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onClose={() => trigger.current?.focus()}
        aria-labelledby="secret-title"
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={story.ui.close}
        >
          {story.ui.close}
          <span aria-hidden="true">×</span>
        </button>
        <p className="eyebrow">{story.easterEgg.label}</p>
        <h2 id="secret-title">{story.easterEgg.title}</h2>
        <p className="secret-text">{story.easterEgg.text}</p>
        <Photo id={story.easterEgg.image} />
      </dialog>
    </>
  );
}
