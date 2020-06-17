import React from "react";
import { isMobile } from "../../util/scroll";
import { ReactComponent as Header } from "./header.svg";
import "./Main.scss";

export function Main({ scroll }) {
  return (
    <div id="Main">
      {!isMobile() && <div className="Logo">RMc</div>}
      <div className="Content">
        <img src="/ryan.png" alt="ryan" />
        <div>
          <Header />
          <h4>
            i write software, and i write about the software that i write.
          </h4>
          <div className="ButtonContainer">
            <button onClick={() => scroll("about")}>who i am</button>
            <button onClick={() => scroll("services")}>what i do</button>
            <button onClick={() => scroll("contact")}>reach out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
