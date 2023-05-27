import "./styles.css";
import videoBg from "../assets/liyue-live.mp4";
import icon from "../assets/icon.png";
import React from "react";
import { Navigate } from "react-router-dom";

export default function Liyue() {
  const [goToMenu, setGoToMenu] = React.useState(false);

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }

  return (
    <body>
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
        <video src={videoBg} autoPlay loop className="outer-image" />
      </div>

      <img
        src={`https://api.genshin.dev/characters/zhongli/portrait`}
        className="inner-image"
      />
      <div class="text-topright-liyue">
        <p>
          The City of Contracts.
          <br /> A bountiful harbor that lies in the east of Teyvat. Mountains
          stand tall and proud alongside the stone forest, that, together with
          the open plains and lively rivers, make up Liyue's bountiful
          landscape, which shows its unique beauty through each of the four
          seasons. Just how many gifts from the Geo God lie in wait amongst the
          rocks of Liyue's mountains?
        </p>
      </div>
    </body>
  );
}
