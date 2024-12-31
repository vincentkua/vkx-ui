import { SideMenuList, SideMenuSubHeader } from "./styled.component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "../utils/scrollToTop";

const SideMenuFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MenuSide = () => {
  const pagenavigate = useNavigate();
  const navigate = (url: string) => {
    pagenavigate(url);
    scrollToTop("notes-area");
  };

  return (
    <>
      <SideMenuFlexBox>
        <SideMenuSubHeader>Getting Started</SideMenuSubHeader>
        <SideMenuList>
          <li onClick={() => navigate("/")}>Installation</li>
          <li onClick={() => navigate("/designtoken")}>Design Token</li>
          <li onClick={() => navigate("/darkmode")}>Dark Mode</li>
        </SideMenuList>

        <SideMenuSubHeader>Components</SideMenuSubHeader>
        <SideMenuList>
          <li onClick={() => navigate("/buttonz")}>Buttonz</li>
          <li onClick={() => navigate("/container")}>Container</li>
          <li onClick={() => navigate("/modal")}>Modal Center</li>
          <li onClick={() => navigate("/loadingscreen")}>Loading Screen</li>
        </SideMenuList>

        <SideMenuSubHeader>Utilities</SideMenuSubHeader>
        <SideMenuList>
          <li onClick={() => navigate("/scrollToTop")}>scrollToTop</li>
          <li onClick={() => navigate("/useWindowSize")}>useWindowSize</li>
          <li>useDateFormat</li>
        </SideMenuList>
      </SideMenuFlexBox>
    </>
  );
};

export default MenuSide;
