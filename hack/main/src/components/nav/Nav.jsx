import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="lgbtq">
        <span className="red"></span>
        <span className="orange"></span>
        <span className="yellow"></span>
        <span className="green"></span>
        <span className="blue"></span>
        <span className="indigo"></span>
        <span className="violet"></span>
      </div>
      <Link to={"/"}>
        <h1 className="logo">
          <span className="lit">Unity in Diversity</span> Belgium 2024
        </h1>
      </Link>
      <button role="button" className="menu-btn" onClick={() => setOpen(!open)}>
        <span className="my">my</span>Vote Account
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        mode={"Vote"}
        text={`To vote we need to verify that you are human and not a robot by
            creating an account using options below`}
      />
    </nav>
  );
};

export default Nav;
