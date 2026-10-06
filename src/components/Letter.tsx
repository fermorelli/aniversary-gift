import { story } from "../data/story";

export function Letter() {
  const { letter } = story.ending;
  return (
    <section
      className="letter-section scene light-scene"
      data-progress="final"
      id="carta"
      aria-labelledby="letter-title"
    >
      <div className="letter reveal">
        <p className="eyebrow">{letter.eyebrow}</p>
        <h2 id="letter-title">{letter.title}</h2>
        <div className="letter-body">
          {letter.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="letter-signature">{letter.signature}</p>
        <span className="letter-mark" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
