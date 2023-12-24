import ContestantCard from "../../components/contestantcard/Card.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
import PartnersMarquee from "../../components/partnersmarquee/PartnersMarquee.jsx";
import { eventDets } from "../../utils/card.js";
import cardDets from "../../utils/card.js";
import Card from "../../components/card/Card.jsx";
import Details from "../../components/details/Details.jsx";
import "./hm.css";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <ContestantCard />
      <div className="prize">
        <div className="shade">
          <div className="sh">
            {eventDets.map((event, key) => {
              const { img, title, text } = event;
              return (
                <Details
                  img={""}
                  title={title}
                  text={text}
                  key={key}
                  idx={`key${key}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {cardDets.map((card, key) => {
        const { img, title, text, btntext, btntext2, mode } = card;
        return (
          <Card
            img={img}
            title={title}
            text={text}
            btntext={btntext}
            btntext2={btntext2}
            mode={mode}
            key={key}
          />
        );
      })}
    </>
  );
};

export default Home;
