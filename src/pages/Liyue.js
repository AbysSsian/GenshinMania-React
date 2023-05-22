import "./styles.css";
import videoBg from "../assets/liyue-live.mp4";
import icon from "../assets/icon.png";

export default function Liyue() {
  return (
    <body>
      <nav className="nav">
        <a href="/" className="site-title">
          {" "}
          GenshinMania{" "}
        </a>
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
