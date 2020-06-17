import React from "react";
import { content } from "./content";
import { isMobile } from "../../util/scroll";
import "./About.scss";

export function About({ scroll }) {
  const { linkedin, name } = content;
  return (
    <div id="About">
      {!isMobile() && (
        <div className="Logo" onClick={() => scroll("main")}>
          RMc
        </div>
      )}
      <h1>who i am.</h1>
      <div className="Person">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/headshot.jpg" alt={name} />
        </a>
        <div>
          <h2>{name}</h2>
          <p>
            I'm a software engineer @{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https:izotope.com"
            >
              Izotope
            </a>
            . I work on the Cloud team, building web applications to record,
            produce, and distribute music. I graduated from Northwestern with
            majors in Computer Science and Music Engineering, and conducted
            research on predictive harmonic progressions in the&nbsp;
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://interactiveaudiolab.github.io/"
            >
              Interactive Audio Lab
            </a>
            .
            <br />
            <br />I love tech for social good, and furthermore social good for
            tech. Volunteering as a mentor @{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://resilientcoders.org/"
            >
              Resilient Coders{" "}
            </a>
            is one of the most productive things I do. If you have the means,
            you too should donate your time and money. It's a phenomenal
            organization, developing phenomenal engineers, deserving your
            support in every way possible.
            <br />
            <br />
            <strong>Some things I really like: </strong>&nbsp;npm, react hooks,
            rescue pitbulls, accessible education
            <br />
            <br />
            <strong>Some things I really don't: </strong>&nbsp;"java", people's
            knees, pirates
            <br />
          </p>
        </div>
      </div>
      {!isMobile() && (
        <div id="AboutButtons">
          <button onClick={() => scroll("services")}>what i do</button>
          <button onClick={() => scroll("contact")}>reach out</button>
          <button onClick={() => scroll("main")}>back to home</button>
        </div>
      )}
    </div>
  );
}
