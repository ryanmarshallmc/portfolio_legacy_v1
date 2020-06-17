import React, { useState, useEffect } from "react";
import "./Input.scss";

export function Input({ type, label, value, onChange }) {
  const [isUsed, setIsUsed] = useState(false);

  useEffect(() => {
    !value && setIsUsed(false);
  }, [value]);

  return (
    <div className="Input">
      <div className={isUsed ? "focused" : ""}>{label}</div>
      {type === "textarea" ? (
        <textarea
          rows={10}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          onFocus={() => setIsUsed(true)}
          onBlur={(e) => {
            setIsUsed(e.target.value.length ? true : false);
          }}
        />
      ) : (
        <input
          type={type}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          onFocus={() => setIsUsed(true)}
          onBlur={(e) => {
            setIsUsed(e.target.value.length ? true : false);
          }}
        />
      )}
    </div>
  );
}
