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
          <li onClick={() => navigate("/")}>Introduction</li>
          <li onClick={() => navigate("/designtoken")}>Design Token</li>
        </SideMenuList>

        <SideMenuSubHeader>Components</SideMenuSubHeader>
        <SideMenuList>
          <li>Button</li>
          <li>Modal</li>
          <li>Loading Screen</li>
        </SideMenuList>

        <SideMenuSubHeader>Utilities</SideMenuSubHeader>
        <SideMenuList>
          <li>useWindowSize</li>
          <li>useDateFormat</li>
          <li>Scroll to top</li>
          <li>Loading Screen</li>
        </SideMenuList>
      </SideMenuFlexBox>
    </>
  );
};

export default SideMenu;
