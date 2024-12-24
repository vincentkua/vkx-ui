import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import SideMenu from "./components/SideMenu";
import { LeftNavArea, RightContentArea } from "./components/styled.component";
import TopMenu from "./components/TopMenu";

const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
          <LeftNavArea>
            <SideMenu />
          </LeftNavArea>
          <RightContentArea>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </RightContentArea>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Providers;
