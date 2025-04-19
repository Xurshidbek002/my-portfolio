import { useEffect, useState } from "react";

const Typewriter = ({ texts, speed = 50, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) setIndex(0);

    if (!deleting && subIndex === texts[index].length) {
      // Wait a bit before starting to delete the text
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (!deleting) {
        // If not deleting, increase the subIndex
        setSubIndex((prev) => prev + 1);
      } else {
        // If deleting, decrease the subIndex
        setSubIndex((prev) => prev - 1);
      }

      // Update the text to match the current subIndex
      setText(texts[index].substring(0, subIndex + (deleting ? 0 : 1)));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, pause]);

  return (
    <span className="text-blue-500 font-semibold text-lg">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
