import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h3 className="sub-intro">The Exclusive Beauty Pageant</h3>
        <h1 className="main-intro">
          Unveiling Elegance: Unveiling the LGBTQ Spectrum – Join the Contest!
        </h1>
      </div>
      <div className="img-container">
        <img src="d2.jpg" alt="" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
