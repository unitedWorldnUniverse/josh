import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { galContestants } from "../../utils/card";
import "./pro.css";
import { useParams } from "react-router-dom";
import { cl } from "./../../assets/svg/cl";

localStorage.setItem("gallery", JSON.stringify(galContestants));
const Profile = () => {
  const contestants = JSON.parse(localStorage.getItem("gallery"));
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const contestant = contestants.find((a) => a.id === id);
  const { img, name, age, bio, country, about } = contestant
    ? contestant
    : false;

  return (
    <div className="parent-container">
      <h1 className="pp">Profile</h1>
      {contestant ? (
        <div className="profile">
          <img src={img} className="prof-pic" alt="" />
          {/* <div
            className="prof-pic"
            style={{ backgroundImage: `url(${img})` }}
          ></div> */}
          <div className="text">
            <h1 className="cname">
              🏳️‍🌈{name}
            </h1>
            <p className="country">{country}</p>
            <p className="bio">{bio}</p>
            <p className="about">{about}</p>
          </div>
          <button className="vote" onClick={() => setOpen(!open)}>
            Vote {name}
          </button>
          <Modal
            open={open}
            setOpen={setOpen}
            mode={"Vote"}
            text={`To vote we need to verify that you are human and not a robot by
            creating an account using options below`}
          />
        </div>
      ) : (
        <p>Contestant not found</p>
      )}
    </div>
  );
};

export default Profile;
