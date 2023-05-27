import "./styles.css";
import videoBg from "../assets/inazuma-live.mp4";
import icon from "../assets/icon.png";

export default function Inazuma() {
  return (
    <body>
      <nav className="nav">
        <a href="/Menu" className="site-title">
          {" "}
          GenshinMania{" "}
        </a>
        <img src={icon} />
      </nav>
      <div className="video">
        <video src={videoBg} autoPlay loop className="outer-image" />
      </div>

      <img
        src={`https://api.genshin.dev/characters/raiden/portrait`}
        className="inner-image"
      />
      <div class="text-topright-inazuma">
        <p>
          The City of Eternity.
          <br /> An Isolated Archipelago Far East of Teyvat Overcome endless
          thunderstorms and set foot on the islands of red maple and cherry
          blossoms. On winding shores and towering cliffs, and in forests and
          mountains full of secrets, witness the Eternity pursued by Her
          Excellency, the Almighty Narukami Ogosho.
        </p>
      </div>
    </body>
  );
}
