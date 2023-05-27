import "./styles.css";
import videoBg from "../assets/sumeru-live.mp4";
import icon from "../assets/icon.png";
import nahida from "../assets/nahida.png";

export default function Sumeru() {
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
