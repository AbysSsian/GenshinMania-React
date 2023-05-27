import React, { useState } from "react";
import "./styles.css";
import videoBg from "../assets/scaramouche-bg.mp4";
import { Navigate } from "react-router-dom";
import icon from "../assets/icon.png";
import event1 from "../assets/hilichurl-event.png";
import event2 from "../assets/promise-event.jpg";
import Banner from "./Carousel";
import mondstadt from "../assets/mondstadt.png";
import liyue from "../assets/liyue.png";
import inazuma from "../assets/inazuma.png";
import sumeru from "../assets/sumeru.png";
import twich from "../assets/twich.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";
import backgroundMusic from "../assets/menu.mp3";
import audioIcon from "../assets/audio-icon.png";
import informationIcon from "../assets/information-icon.png";
import genshinmaniaIcon from "../assets/genshinmania.png";
import uparrow from "../assets/uparrow.png";

export default function Menu() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [goToCharacter, setGoToCharacter] = React.useState(false);
  const [goToWeapon, setGoToWeapon] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToFood, setGoToFood] = React.useState(false);
  const [goToMondstadt, setGoToMondstadt] = React.useState(false);
  const [goToLiyue, setGoToLiyue] = React.useState(false);
  const [goToInazuma, setGoToInazuma] = React.useState(false);
  const [goToSumeru, setGoToSumeru] = React.useState(false);
  const [goToAbout, setGoToAbout] = React.useState(false);
  const audio = new Audio(backgroundMusic);

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

  if (goToAbout) {
    return <Navigate to="/About" />;
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

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const redirectToEvent1 = () => {
    window.open(
      "https://act.hoyolab.com/puzzle/bbs/pz_piCJiKMQnV/index.html?game_biz=bbs_oversea&hyl_presentation_style=fullscreen&hyl_auth_required=true&utm_id=2&utm_medium=banner&utm_source=hoyolab&lang=en-us&bbs_theme=dark&bbs_theme_device=1",
      "_blank"
    );
  };

  const redirectToEvent2 = () => {
    window.open("https://hoyo.link/0bDuCGAd", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <div className="navbar">
          <nav className="nav">
            <a href="/" className="site-title">
              {" "}
              GenshinMania{" "}
            </a>
            <img src={icon} alt="icon" className="icon" />
            <div className="nav-elements">
              <span className="scroll-elements">
                <img
                  src={informationIcon}
                  alt="info"
                  onClick={() => {
                    setGoToAbout(true);
                  }}
                />
              </span>
              <span className="scroll-elements" onClick={toggleMusic}>
                <img src={audioIcon} alt="audio" />
              </span>

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
        </div>
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
            <button
              onClick={() => {
                setGoToFood(true);
              }}
            >
              Food
            </button>
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
              <center>
                <img src={event1} alt="event1" onClick={redirectToEvent1} />
                <img src={event2} alt="event1" onClick={redirectToEvent2} />
              </center>
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
              <img
                src={liyue}
                onClick={() => {
                  setGoToLiyue(true);
                }}
              />
              <div className="centered-text">Liyue</div>
            </div>
            <div className="nations">
              <img
                src={inazuma}
                onClick={() => {
                  setGoToInazuma(true);
                }}
              />
              <div className="centered-text">Inazuma</div>
            </div>
            <div className="nations">
              <img
                src={sumeru}
                onClick={() => {
                  setGoToSumeru(true);
                }}
              />
              <div className="centered-text">Sumeru</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="text">
            <ul>
              <li>
                <h3 className="text-left">
                  <b>Our Content</b>
                </h3>
              </li>
              <li>
                <p className="text-left">Character Banner</p>
              </li>
              <li>
                <p className="text-left">Ongoing Event</p>
              </li>
              <li>
                <p className="text-left">Character Archive</p>
              </li>
              <li>
                <p className="text-left">Weapon Archive</p>
              </li>
              <li>
                <p className="text-left">Nations</p>
              </li>
            </ul>
          </div>
          <div className="text2">
            <ul>
              <li className="arrow">
                <img src={uparrow} alt="arrow" onClick={scrollToTop} />
              </li>
              <li>
                <h3 className="text-left">
                  <img src={genshinmaniaIcon} alt="logo" />
                </h3>
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
