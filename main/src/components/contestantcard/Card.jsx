import "./ccard.css";

const ContestantCard = () => {
  return (
    <div className="c-card">
      <div className="small-event">
        <div className="ev-dets">
          <h1 className="ev-title"> Prizes Fit for Royalty</h1>
          <p>
            Our esteemed winners will not only be crowned with the title but
            will also receive luxurious prizes that redefine opulence. Prepare
            to be dazzled
          </p>
        </div>
        <img src="/d1.jpg" className="ev-img" alt="" />
      </div>
    </div>
  );
};

export default ContestantCard;
