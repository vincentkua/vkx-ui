import { LightbulbIcon, LightbulbOffIcon, OrigamiIcon } from "lucide-react";
import styled from "styled-components";

type MenuTopProps = {
  toggleDarkMode: () => void;
  currentTheme: string;
};

const MenuTop = ({ toggleDarkMode, currentTheme }: MenuTopProps) => {
  const SideMenuTopHeaderBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.color.text.header};
    height: 50px;
    padding-left: 18px;
    padding-right: 18px;
    border-bottom: 1px solid ${({ theme }) => theme.color.cards.border2};
    background-color: ${({ theme }) => theme.color.background.default};
  `;
  return (
    <>
      <SideMenuTopHeaderBox>
        <OrigamiIcon size={28} color="#4a5bf6" />
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>VKX-UI</div>
        <span style={{ flexGrow: 1 }} />
        <div onClick={toggleDarkMode} style={{cursor:"pointer"}}>
          {currentTheme === "dark" ? (
            <LightbulbOffIcon size={24} style={{ color: "#3b3b3b" }}/>
          ) : (
            <LightbulbIcon size={24} style={{ color: "#e2b933" }} />
          )}
        </div>
      </SideMenuTopHeaderBox>
    </>
  );
};

export default MenuTop;
