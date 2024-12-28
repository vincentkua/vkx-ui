import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuSide from "./components/MenuSide";
import { LeftNavArea, RightContentArea } from "./components/styled.component";
import MenuTop from "./components/MenuTop";
import Introduction from "./pages/01Gettingstarted/01Introduction/Introduction";
import DesignTokenPage from "./pages/01Gettingstarted/02DesignToken/DesignTokenPage";
import { Container } from "vkx-ui";
import ContainerPage from "./pages/02Components/01ContainerPage/ContainerPage";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkMode, lightMode } from "./utils/designtoken";
import { useWindowSize } from "./utils/useWindowSize";
import DarkModePage from "./pages/01Gettingstarted/03DarkMode/DarkMode";
import ModalPage from "./pages/02Components/02ModalPage/ModalPage";

const GlobalStyles = createGlobalStyle`
    body{
        background:${({ theme }) => theme.color.background.default};
        color:${({ theme }) => theme.color.text.default};
        transition: all 0.5s linear;
    }
`;

const Providers = () => {
  const [mytheme, setMytheme] = useState("dark");
  const themeToggler = () => {
    mytheme === "light" ? setMytheme("dark") : setMytheme("light");
  };
  const { isMobile } = useWindowSize();

  return (
    <>
      <ThemeProvider theme={mytheme === "light" ? lightMode : darkMode}>
        <BrowserRouter>
          <GlobalStyles />
          <MenuTop toggleDarkMode={themeToggler} currentTheme={mytheme} />
          <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
            {!isMobile && (
              <LeftNavArea>
                <MenuSide />
              </LeftNavArea>
            )}
            <RightContentArea>
              <Container>
                <Routes>
                  <Route path="/" element={<Introduction />} />
                  <Route path="/designtoken" element={<DesignTokenPage />} />
                  <Route path="/darkmode" element={<DarkModePage />} />
                  <Route path="/container" element={<ContainerPage />} />
                  <Route path="/modal" element={<ModalPage />} />
                </Routes>
              </Container>
            </RightContentArea>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Providers;
