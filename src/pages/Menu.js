import React from "react";
import "./styles.css";
import videoBg from "../assets/scaramouche-bg.mp4";
import { Navigate } from "react-router-dom";
import icon from "../assets/icon.png";
import event1 from "../assets/recollectors-path.png";
import event2 from "../assets/overflowing-mastery.png";
import Banner from "./Carousel";

export default function Menu() {
  const [goToCharacter, setGoToCharacter] = React.useState(false);

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <nav className="nav">
          <a href="/" className="site-title">
            {" "}
            GenshinMania{" "}
          </a>
          <img src={icon} />
        </nav>
        <div className="video">
          <video src={videoBg} autoPlay loop />
        </div>
        <div className="welcome-inside">
          <div className="welcome">
            <center>
              <h1>Welcome to GenshinMania</h1>
              <h2>A Genshin Impact Encyclopedia</h2>
            </center>
          </div>
        </div>

        <div className="sections">
          <div className="button-group">
            <button
              onClick={() => {
                setGoToCharacter(true);
              }}
            >
              {" "}
              Characters
            </button>
            <button>Weapons</button>
            <button>Artifacts</button>
            <button>Material</button>
          </div>
        </div>
        <div>
          <center>
            <div className="banner-img">
              <Banner></Banner>
            </div>
          </center>

          <div className="event-container">
            <div className="events">
              <img src={event1} alt="" />
              <img src={event2} alt="" />
            </div>
            <div className="event-desc">
              <p>
                During the event, help Sorush complete various forms of trials
                to obtain Primogems, Weapon Ascension Materials, Hero's Wit, and
                other rewards.
              </p>
              <p className="paragraph2">
                During the event, Travelers who successfully completed the
                Talent Level-Up Materials Domains "Forsaken Rift", "Taishan
                Mansion", "Violet Court", and "Steeple of Ignorance", can claim
                the rewards by using Original Resin to receive double the
                rewards. A total of 3 such bonuses will be available each day.
              </p>
            </div>
          </div>
          <footer>
            <div className="”footer-content”">
              <h3>GenshinMania Footer</h3>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
