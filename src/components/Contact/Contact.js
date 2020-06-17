import React, { useState, useEffect } from "react";
import { Input } from "../../components";
import { content } from "./content";
import { isMobile } from "../../util/scroll";
import "./Contact.scss";

export function Contact({ scroll }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("ContactForm");
    const data = new FormData(form);
    const req = new XMLHttpRequest();
    req.open(form.method, form.action);
    req.setRequestHeader("Accept", "application/json");
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return;
      if (req.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("Thanks for reaching out!");
      } else {
        const e = JSON.parse(req.response).error;
        setStatus(
          `whoops - ${
            e.includes("email") ? "invalid email." : "gotta fill out the form."
          }`
        );
      }
    };
    req.send(data);
  }

  const Blurb = ({ title, body }) => (
    <div className="Blurb">
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );

  return (
    <>
      <div id="ContactContent">
        <h1>let's talk.</h1>
        {content.map((b) => (
          <Blurb {...b} key={b.title} />
        ))}
        <br />
        {!isMobile() && (
          <button onClick={() => scroll("main")}>back to home</button>
        )}
      </div>
      <div id="InputContainer">
        <Input
          type="text"
          label="Your name..."
          onChange={setName}
          value={name}
        />
        <Input
          type="email"
          label="Your email"
          onChange={setEmail}
          value={email}
        />
        <Input
          type="textarea"
          label="What's on your mind?"
          onChange={setMessage}
          value={message}
        />
        <div id="FormSubmit">
          <button disabled={!(name && email && message)} onClick={handleSubmit}>
            submit
          </button>
          <div>{status}</div>
        </div>
      </div>
      {!isMobile() && (
        <div id="Contact" style={{ width: height * 1.4 }}>
          <div className="Logo">RMc</div>
        </div>
      )}

      <form
        id="ContactForm"
        action="https://formspree.io/xrgylbjz"
        method="POST"
      >
        <input value={name} type="hidden" name="name" />
        <input value={email} type="hidden" name="_replyto" />
        <input value={message} type="hidden" name="message" />
      </form>
    </>
  );
}
