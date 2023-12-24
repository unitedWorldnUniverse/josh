import { useEffect, useRef, useState } from "react";
// import Gallery from "../../components/gallery/Gallery.jsx";
import Card from "../../components/gallery/Card.jsx";
import { galContestants } from "../../utils/card";
import Modal from "../../components/modal/Modal.jsx";
import "./c.css";

localStorage.setItem("gallery", JSON.stringify(galContestants));

const Contestants = () => {
  const seeMoreBtn = useRef(null);
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const quantity = 10;
  const [models, setModels] = useState([...galContestants.slice(0, 10)]);

  function seeMore() {
    let start = current * quantity;
    let end = start + quantity;
    let content = galContestants.slice(start, end);
    setModels(() => [...models, ...content]);
    setCurrent(current + 1);
  }

  useEffect(() => {
    if (models.length === galContestants.length) {
      seeMoreBtn.current.classList.add("disabled");
      seeMoreBtn.current.disabled = true;
    }
  }, [models]);

  return (
    <div className="contestants">
      <h1 className="c-title">Contestants</h1>
      <p>Our Contestants from around the world!</p>
      <div className="gallery">
        {models.map((gal, key) => {
          const { img, name, bio, age, country, cn, id } = gal;
          return (
            <Card
              img={img}
              name={name}
              age={age}
              country={country}
              cn={cn}
              id={id}
              bio={bio}
              key={key}
            />
          );
        })}
      </div>
      <button className="see" ref={seeMoreBtn} onClick={() => seeMore()}>
        See More
      </button>
      <button className=" register become" onClick={() => setOpen(!open)}>
        Register
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        mode={"Contest"}
        text={`To contest we need to verify that you are human and not a robot by
            creating an account using options below`}
      />
    </div>
  );
};

export default Contestants;
