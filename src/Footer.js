import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://capable-gecko-e2e2dc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sophie Nkateko Ndobe
        </a>{" "}
        and it is{" "}
        <a
          href="https://github.com/Sophie-Ndobe/week5-cool-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
      </p>
    </div>
  );
}
