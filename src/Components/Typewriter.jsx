import { useEffect, useState } from "react";

const Typewriter = ({ texts, speed = 80, pause = 1500 }) => {
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
    <div className="text-center h-13 flex items-center">
      <span className="text-blue-100 md:text-left text-shadow-[0_0_28px_blue] font-semibold text-md leading-0.5 lg:text-lg">
        {text}
        <span className="animate-pulse text-2xl text-[#f3ff07] ">|</span>
      </span>
    </div>
  );
};

export default Typewriter;
