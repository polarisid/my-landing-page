import { useEffect, useRef, useState } from "react";

type Props = {
  phrases: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

/**
 * Types a phrase, pauses, deletes, and moves to the next — looping. Renders a
 * blinking caret. Respects prefers-reduced-motion (shows the first phrase).
 */
export default function Typewriter({
  phrases,
  typingSpeed = 60,
  deleteSpeed = 30,
  pause = 1900,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setText(phrases[0]);
  }, [phrases]);

  useEffect(() => {
    if (reduced.current) return;
    const full = phrases[index];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      t = setTimeout(
        () => setText(full.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typingSpeed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deleteSpeed, pause]);

  return (
    <span className="tw">
      {text}
      <i className="tw-caret" aria-hidden="true" />
    </span>
  );
}
