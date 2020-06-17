import React, { useEffect, useState } from "react";
import { About, Main, Contact, Services, MobileHeader } from "./components";
import {
  disableScroll,
  isMobile,
  enableScroll,
  handleScroll,
} from "./util/scroll";

export default function App() {
  const [page, setPage] = useState("main");
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);

  useEffect(() => {
    scroll(page);
    !isMobile() ? disableScroll() : enableScroll();
    window.addEventListener("resize", () => {
      setX(window.innerWidth);
      setY(window.innerHeight);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    !isMobile() &&
      setTimeout(() => {
        scroll(page);
      }, 320);
  }, [x, y]); // eslint-disable-line react-hooks/exhaustive-deps

  function scroll(to) {
    to && setPage(to);
    handleScroll(to, x, y);
  }

  return (
    <div id="App">
      {isMobile() && <MobileHeader />}
      <Main scroll={(to) => scroll(to)} />
      <About scroll={(to) => scroll(to)} />
      <Services scroll={(to) => scroll(to)} />
      <Contact scroll={(to) => scroll(to)} />
    </div>
  );
}
