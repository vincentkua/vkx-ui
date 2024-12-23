import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { OrigamiIcon } from "lucide-react";

const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", height: "100vh" }}>
          <div
            style={{
              flex: "0 0 200px",
              backgroundColor: "#f5f5f5",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#2a2a2a",
                }}
              >
                <OrigamiIcon size={22} />
                <div style={{ fontSize: "18px" , fontWeight:"bold" }}>VKX-UI</div>
              </div>
              <Link to={"/"}>Home </Link>
              <Link to={"/about"}>About </Link>
            </div>
          </div>
          <div
            style={{
              flexGrow: 1,
              backgroundColor: "#FFFFFF",
              overflowY: "scroll",
              padding: "8px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Providers;
