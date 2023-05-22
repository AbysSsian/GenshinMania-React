import React from "react";
import "./styles.css";
import videoBg from "../assets/scaramouche-bg.mp4";
import { Navigate } from "react-router-dom";
import icon from "../assets/icon.png";
import event1 from "../assets/recollectors-path.png";
import event2 from "../assets/overflowing-mastery.png";
import Banner from "./Carousel";
import mondstadt from "../assets/mondstadt.png";
import liyue from "../assets/liyue.png";
import inazuma from "../assets/inazuma.png";
import sumeru from "../assets/sumeru.png";
import twich from "../assets/twich.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";

export default function Menu() {
  const [goToCharacter, setGoToCharacter] = React.useState(false);
  const [goToWeapon, setGoToWeapon] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToFood, setGoToFood] = React.useState(false);
  const [goToMondstadt, setGoToMondstadt] = React.useState(false);
  const [goToLiyue, setGoToLiyue] = React.useState(false);
  const [goToInazuma, setGoToInazuma] = React.useState(false);
  const [goToSumeru, setGoToSumeru] = React.useState(false);

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  if (goToWeapon) {
    return <Navigate to="/Weapon" />;
  }

  if (goToArtifact) {
    return <Navigate to="/Artifact" />;
  }

  if (goToFood) {
    return <Navigate to="/Food" />;
  }

  if (goToMondstadt) {
    return <Navigate to="/Mondstadt" />;
  }

  if (goToLiyue) {
    return <Navigate to="/Liyue" />;
  }

  if (goToInazuma) {
    return <Navigate to="/Inazuma" />;
  }

  if (goToSumeru) {
    return <Navigate to="/Sumeru" />;
  }

  const scrollToPages = () => {
    const targetElement = document.getElementById("pages");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  const scrollToEventBanner = () => {
    const targetElement = document.getElementById("EventBanner");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  const scrollToEvents = () => {
    const targetElement = document.getElementById("Events");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  const scrollToNations = () => {
    const targetElement = document.getElementById("Nations");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

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
          <div className="nav-elements">
            <span className="scroll-elements" onClick={scrollToPages}>
              Pages
            </span>
            <span className="scroll-elements" onClick={scrollToEventBanner}>
              Event Banner
            </span>
            <span className="scroll-elements" onClick={scrollToEvents}>
              Events
            </span>
            <span className="scroll-elements" onClick={scrollToNations}>
              Nations
            </span>
          </div>
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

        <div className="sections" id="pages">
          <div className="button-group">
            <button
              onClick={() => {
                setGoToCharacter(true);
              }}
            >
              {" "}
              Characters
            </button>
            <button
              onClick={() => {
                setGoToWeapon(true);
              }}
            >
              Weapons
            </button>
            <button
              onClick={() => {
                setGoToArtifact(true);
              }}
            >
              Artifacts
            </button>
            <button>Material</button>
          </div>
        </div>
        <div>
          <center>
            <div className="banner-img" id="EventBanner">
              <Banner></Banner>
            </div>
          </center>

          <div className="event-container" id="Events">
            <div className="events">
              <img src={event1} alt="" />
              <img src={event2} alt="" />
            </div>
            <div className="event-desc">
              <div className="paragraph1">
                During the event, help Sorush complete various forms of trials
                to obtain Primogems, Weapon Ascension Materials, Hero's Wit, and
                other rewards.
              </div>
              <div className="paragraph2">
                During the event, Travelers who successfully completed the
                Talent Level-Up Materials Domains "Forsaken Rift", "Taishan
                Mansion", "Violet Court", and "Steeple of Ignorance", can claim
                the rewards by using Original Resin to receive double the
                rewards. A total of 3 such bonuses will be available each day.
              </div>
            </div>
          </div>
          <div className="all-nations" id="Nations">
            <div className="nations">
              <img
                src={mondstadt}
                onClick={() => {
                  setGoToMondstadt(true);
                }}
              />
              <div className="centered-text">Mondstadt</div>
            </div>
            <div className="nations">
              <img src={liyue} />
              <div className="centered-text">Liyue</div>
            </div>
            <div className="nations">
              <img src={inazuma} />
              <div className="centered-text">Inazuma</div>
            </div>
            <div className="nations">
              <img src={sumeru} />
              <div className="centered-text">Sumeru</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="text">
            <ul>
              <li>
                <h3 className="text-left">
                  <b>About Us</b>
                </h3>
              </li>
              <li>
                <div className="text-left">Axel Bryan Bolang</div>
              </li>
              <li>
                <p className="text-left">Arza Vito Hidayat</p>
              </li>
              <li>
                <p className="text-left">Charel Rosabel</p>
              </li>
              <li>
                <p className="text-left">ELisabeth Lauren</p>
              </li>
            </ul>
          </div>
          <div className="text2">
            <ul>
              <li>
                <h3 className="text-left">
                  <b>Our Content</b>
                </h3>
              </li>
              <li>
                <p className="text-left">Character Benner</p>
              </li>
              <li>
                <p className="text-left">Ongoing Event</p>
              </li>
              <li>
                <p className="text-left">Character Arcive</p>
              </li>
              <li>
                <p className="text-left">Weapon Arcive</p>
              </li>
            </ul>
          </div>

          <div className="bungkus">
            <h3>Visit Us</h3>
            <div className="google-icon">
              <a
                href="https://discord.com/servers/genshin-impact-indonesia-761105197372014632"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} />
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://discord.com/servers/genshin-impact-indonesia-761105197372014632"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={discord} />
              </a>
              <a
                href="https://twitter.com/GenshinImpact?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twich} />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
