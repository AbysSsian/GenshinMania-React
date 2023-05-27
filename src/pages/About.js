import "./styles.css";
import icon from "../assets/icon.png";
import art from "../assets/about-art.jpg";
import bryan from "../assets/bryan.png";
import vito from "../assets/vito.png";
import rosabel from "../assets/rosabel.png";
import lauren from "../assets/lauren.png";
import React from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [goToMenu, setGoToMenu] = React.useState(false);

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }

  return (
    <body>
      <div className="navbar">
        <nav className="nav">
          <div
            className="site-title"
            onClick={() => {
              setGoToMenu(true);
            }}
          >
            GenshinMania
          </div>
          <img src={icon} className="icon" />
          <div className="nav-elements"></div>
        </nav>
      </div>
      <div className="bg-art">
        <img src={art} alt="art" />
      </div>

      <div className="body-scroll">
        <div className="container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>

      <div className="about-us">
        <center>
          <h1>About Us</h1>
          <div className="about-info">
            This website's function is to serve as a manual for the Genshin
            Impact game. help simplify the process of gamers learning more about
            the game's characters, artifacts, weapons, and food. Additionally,
            there are several tools that make it simpler for users to do
            specific searches, giving people who aren't game players a clear
            reason to use our web application.
          </div>
        </center>
      </div>

      <div className="main-info">
        <div className="profile">
          <img src={vito} alt="Arza Vito Hidayat" />
          <div className="names">Arza Vito Hidayat</div>
          <div className="NIM">00000071728</div>
        </div>
        <div className="profile">
          <img src={bryan} alt="Axel Bryan Bolang" />
          <div className="names">Axel Bryan Bolang</div>
          <div className="NIM">00000072124</div>
        </div>
        <div className="profile">
          <img src={rosabel} alt="Charel Rosabel" />
          <div className="names">Charel Rosabel</div>
          <div className="NIM">00000072046</div>
        </div>
        <div className="profile">
          <img src={lauren} alt="Elisabeth Lauren" />
          <div className="names">Elisabeth Lauren</div>
          <div className="NIM">00000072541</div>
        </div>
      </div>
    </body>
  );
}
