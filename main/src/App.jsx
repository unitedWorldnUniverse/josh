import Nav from "./components/nav/Nav";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Contestants from "./pages/Contestant/Contestants.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contestants" element={<Contestants />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
