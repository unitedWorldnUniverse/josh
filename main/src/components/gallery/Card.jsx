import "./gc.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, age, country, cn, id } = props;

  return (
    <Link className={"cont " + cn} to={`/profile/${id}`}>
      <img src={img} className="g-img" alt="blog post one" />
      <div className="det">
        <h2 className="name">{name}.</h2>
        <p className="country">{country}</p>
      </div>
    </Link>
  );
};

export default Card;
