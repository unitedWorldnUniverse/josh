import "./pm.css";

const PartnersMarquee = () => {
  const partners = [
    "/aa.png",
    "/av.png",
    "/mac.png",
    "/nike.png",
    "/phd.png",
    "/lv.png",
    // "/cl.png",
    // "/gs.png",
    // "/mab.png",
    // "/png.png",
    // "/sh.png",
    // "/tbx.png",
    // "/tg.png",
    // "/wg.png",
  ];
  return (
    <div className="partners">
      <h1 className="p-title">Our Partners</h1>
      <div className="p-img">
        {partners.map((p, key) => (
          <img src={p} key={key} />
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
