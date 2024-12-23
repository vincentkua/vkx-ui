import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            padding:"4px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            height: "30px",
            backgroundColor: "#d4d4d4",
          }}
        >
          <Link to={"/"}>Home </Link>
          <Link to={"/about"}>About </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Providers;
