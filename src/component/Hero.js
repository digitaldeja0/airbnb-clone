import hero from "../images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroImgDiv">
        <img src={hero} alt="Camping House" className="heroImg" />
      </div>
      <div className="heroTextDiv">
        <h1>The Worlds Best Camp Finder</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          quam, enim omnis cumque adipisci vel atque officiis, inventore
          sapiente in beatae iste. Consequatur, enim harum.
        </p>
      </div>
    </section>
  );
}
