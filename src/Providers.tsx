import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import { LeftNavArea, RightContentArea } from "./components/styled.component";
import TopMenu from "./components/TopMenu";
import Introduction from "./pages/Introduction";
import DesignTokenPage from "./pages/DesignTokenPage";

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
              <Route path="/" element={<Introduction />} />
              <Route path="/designtoken" element={<DesignTokenPage />} />
            </Routes>
          </RightContentArea>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Providers;
