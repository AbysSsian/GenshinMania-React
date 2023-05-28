import "./styles.css";
import videoBg from "../assets/sumeru-live.mp4";
import icon from "../assets/icon.png";
import nahida from "../assets/nahida.png";
import React from "react";
import { Navigate } from "react-router-dom";
import bgm from "../assets/sumeru-bgm.mp3";

export default function Sumeru() {
  const [goToMenu, setGoToMenu] = React.useState(false);

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }
  return (
    <body>
      <audio src={bgm} autoPlay loop />
      <nav className="nav">
        <div
          className="site-title"
          onClick={() => {
            setGoToMenu(true);
          }}
        >
          GenshinMania
        </div>
        <img src={icon} />
      </nav>
      <div className="video">
        <video src={videoBg} autoPlay loop muted className="outer-image" />
      </div>

      <img src={nahida} className="inner-image-nahida" />
      <div class="text-topright-sumeru">
        <p>
          The City of Wisdom.
          <br /> The city of scholars located in the west-central part of
          Teyvat. A fantastical nation of both lush rainforest and barren
          desert, where countless fruits of wisdom grow and are buried. Whether
          Travelers travel from afar through the forest to reach the academy
          city or delve deep into the desert to discover the historical ruins of
          the red desert, a wealth of valuable knowledge awaits them here.
        </p>
      </div>
    </body>
  );
}
