import { OrigamiIcon } from "lucide-react";
import styled from "styled-components";

const TopMenu = () => {
  const SideMenuTopHeaderBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4d77f5;
    height: 50px;
    padding-left: 10px;
    border-bottom: 1px solid #efefef;
  `;
  return (
    <>
      <SideMenuTopHeaderBox>
        <OrigamiIcon size={28} />
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>VKX-UI</div>
      </SideMenuTopHeaderBox>
    </>
  );
};

export default TopMenu;
