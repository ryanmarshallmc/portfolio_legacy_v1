import React from "react";
import { content } from "./content";
import { isMobile } from "../../util/scroll";
import "./Services.scss";

export function Services({ scroll }) {
  const openLink = (link) => window.open(link, "_blank");

  const Blurb = ({ title, body, img, className, link }) =>
    isMobile() ? (
      <div className={`Blurb ${className}`}>
        <div>
          <img className={className} src={img} alt={title} />
          <h4 className={className}>{title}</h4>
        </div>
        <p className={className}>{body}</p>
        <button onClick={() => openLink(link)}>Learn More</button>
      </div>
    ) : (
      <div className={`Blurb ${className}`} onClick={() => openLink(link)}>
        <img className={className} src={img} alt={title} />
        <div>
          <h4 className={className}>{title}</h4>
          <p className={className}>{body}</p>
        </div>
      </div>
    );

  return (
    <div id="Services">
      <h1>what i do.</h1>
      {content.map((b) => (
        <Blurb {...b} key={b.title} />
      ))}
      {!isMobile() && (
        <div id="ServicesButtons">
          <button onClick={() => scroll("contact")}>reach out</button>
          <button onClick={() => scroll("about")}>who i am</button>
          <button onClick={() => scroll("main")}>back to home</button>
        </div>
      )}
    </div>
  );
}
