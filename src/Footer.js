import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This website was coded by
      <a
        className="name-link"
        href="https://www.linkedin.com/in/anjana-kurdina"
        target="_blank"
        rel="noreferrer noopener"
      >
        <em>Anjana Kurdina</em>
      </a>
      , is open-sourced on{" "}
      <a
        href="https://github.com/AnjanaKurdina/weather-react-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </a>{" "}
      and hosted by{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Netlify
      </a>
      .
    </div>
  );
}
