import { OrigamiIcon } from "lucide-react";
import styled from "styled-components";

const MenuTop = () => {
  const SideMenuTopHeaderBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333333;
    height: 50px;
    padding-left: 18px;
    border-bottom: 1px solid #efefef;
    background-color:#ffffff;
  `;
  return (
    <>
      <SideMenuTopHeaderBox>
        <OrigamiIcon size={28} color="#4a5bf6"/>
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>
          VKX-UI
        </div>
      </SideMenuTopHeaderBox>
    </>
  );
};

export default MenuTop;
