import { SideMenuList, SideMenuSubHeader } from "./styled.component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideMenu = () => {
  const navigate = useNavigate();
  const SideMenuFlexBox = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;

  return (
    <>
      <SideMenuFlexBox>
        <SideMenuSubHeader>Getting Started</SideMenuSubHeader>
        <SideMenuList>
          <li onClick={() => navigate("/")}>Home</li>
          <li>Introduction</li>
          <li>Design Token</li>
          <li onClick={() => navigate("/about")}>About</li>
        </SideMenuList>

        <SideMenuSubHeader>Components</SideMenuSubHeader>
        <SideMenuList>
          <li>Button</li>
          <li>Modal</li>
          <li>Loading Screen</li>
        </SideMenuList>

        <SideMenuSubHeader>Utils</SideMenuSubHeader>
        <SideMenuList>
          <li>useWindowSize</li>
          <li>useDateFormat</li>
          <li>Loading Screen</li>
        </SideMenuList>
      </SideMenuFlexBox>
    </>
  );
};

export default SideMenu;
