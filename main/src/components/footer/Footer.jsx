import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="flogo">
        <span className="flit">Miss</span> Dubai 2024
      </h1>
      <ul>
        {/* <h2 className="ft"></h2> */}
        <li>Home</li>
        <li>About us</li>
        <li>Prizes</li>
        <li>Event details</li>
        <li>Register</li>
        <li>Contact us</li>
      </ul>
      <ul>
        <h1 className="ft">Legal</h1>
        <li>privacy policy</li>
        <li>Copyright</li>
        <li className="last">🏳️‍🌈🏳️‍⚧️LGBTQ+ rights</li>
      </ul>
      <p className="cr">© 2024 Beauty Royalty. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
