import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuSide from "./components/MenuSide";
import { LeftNavArea, RightContentArea } from "./components/styled.component";
import MenuTop from "./components/MenuTop";
import Introduction from "./pages/01Gettingstarted/01Introduction/Introduction";
import DesignTokenPage from "./pages/01Gettingstarted/02DesignToken/DesignTokenPage";
import {Container} from "vkx-ui"
import ContainerPage from "./pages/02Components/01ContainerPage/ContainerPage";



const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <MenuTop />
        <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
          <LeftNavArea>
            <MenuSide />
          </LeftNavArea>
          <RightContentArea>
            <Container>
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/designtoken" element={<DesignTokenPage />} />
                <Route path="/container" element={<ContainerPage />} />
              </Routes>
            </Container>
          </RightContentArea>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Providers;
