import React from "react";
import "./styles.css";
import twich from "../assets/twich.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";

export default function Footer() {
  <div className="footer">
    <div className="text">
      <ul>
        <li>
          <h3 className="text-left">
            <b>About Us</b>
          </h3>
        </li>
        <li>
          <p className="text-left">Axel Bryan Bolang</p>
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
  </div>;
}
