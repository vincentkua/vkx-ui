import {
  LightbulbIcon,
  LightbulbOffIcon,
  MenuIcon,
  OrigamiIcon,
} from "lucide-react";
import styled, { useTheme } from "styled-components";
import { useWindowSize } from "../utils/useWindowSize";
import LeftMenuModal from "./LeftMenuModal";
import { useState } from "react";

type MenuTopProps = {
  toggleDarkMode: () => void;
  currentTheme: string;
};

const SideMenuTopHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.text.header};
  height: 50px;
  padding-left: 18px;
  padding-right: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.level1};
  background-color: ${({ theme }) => theme.color.background.default};
`;

const MenuTop = ({ toggleDarkMode, currentTheme }: MenuTopProps) => {
  const { isMobile } = useWindowSize();
  const [showLeftMenuModal, setShowLeftMenuModal] = useState(false);
  const theme = useTheme();

  return (
    <>
      {showLeftMenuModal && (
        <LeftMenuModal closeModal={() => setShowLeftMenuModal(false)} />
      )}

      <SideMenuTopHeaderBox>
        {isMobile && (
          <MenuIcon
            style={{ cursor: "pointer", color: theme.color.text.label }}
            onClick={() => setShowLeftMenuModal(true)}
          />
        )}
        {isMobile && <span style={{ flexGrow: 1 }} />}
        <OrigamiIcon size={28} color="#4a5bf6" />
        {!isMobile && (
          <div style={{ fontSize: "14px", fontWeight: "bold" }}>VKX-UI</div>
        )}

        <span style={{ flexGrow: 1 }} />
        <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
          {currentTheme === "dark" ? (
            <LightbulbOffIcon size={24} style={{ color: "#3b3b3b" }} />
          ) : (
            <LightbulbIcon size={24} style={{ color: "#e2b933" }} />
          )}
        </div>
      </SideMenuTopHeaderBox>
    </>
  );
};

export default MenuTop;
