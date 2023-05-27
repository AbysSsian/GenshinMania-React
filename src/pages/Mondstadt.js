import "./styles.css";
import videoBg from "../assets/mondstadt-live.mp4";
import icon from "../assets/icon.png";
import React from "react";
import { Navigate } from "react-router-dom";

export default function Mondstadt() {
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
        src={`https://api.genshin.dev/characters/venti/portrait`}
        className="inner-image"
      />
      <div class="text-topright">
        <p>
          The City of Freedom.
          <br /> A city of freedom that lies in the northeast of Teyvat. From
          amongst mountains and wide-open plains, carefree breezes carry the
          scent of dandelions — a gift from the Anemo God, Barbatos — across
          Cider Lake to Mondstadt, which sits on an island in the middle of the
          lake.
        </p>
      </div>
    </body>
  );
}
