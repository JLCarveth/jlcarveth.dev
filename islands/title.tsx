import { useEffect, useState } from "preact/hooks";

const titles = ["Software Developer", "Unix Enthusiast", "Tinkerer"];
export default function Title() {
  // Start index at 0 and cycle through titles
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (titleIndex === titles.length - 1) setTitleIndex(0);
      else {
        setTitleIndex(titleIndex + 1);
      }
    }, 2500);
    return () => clearInterval(timer);
  });

  return <mark>{titles[titleIndex]}</mark>;
}
