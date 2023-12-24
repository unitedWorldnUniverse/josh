import { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

// eslint-disable-next-line react/prop-types
const Card = ({ img, title, text, btntext, btntext2, mode }) => {
  const [open, setOpen] = useState(false);
  const [umode, setuMode] = useState(mode);

  function openModal(mode) {
    console.log(mode);
    setuMode(mode);
    setOpen(true);
  }
  return (
    <div className="how-to-p">
      <img src={img} className="h-img" alt="" />
      <div className="how">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="register" onClick={() => openModal(mode)}>
          {btntext}
        </button>
        {btntext2 && (
          <Link to="/contestants">
            <button className="register models">{btntext2}</button>
          </Link>
        )}
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        mode={umode}
        text={`To ${umode} we need to verify that you are human and not a robot by
            creating an account using options below`}
      />
    </div>
  );
};

export default Card;
