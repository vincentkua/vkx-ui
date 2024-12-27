//SampleOverlayModal.tsx
import ReactDOM from "react-dom";
import MenuSide from "./MenuSide";
import { OrigamiIcon } from "lucide-react";
import { useTheme } from "styled-components";

type OverlayModalType = {
  closeModal: () => void;
};

const LeftMenuModal = ({ closeModal }: OverlayModalType) => {
  const theme = useTheme();

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 2000,
        display: "flex",
        color: "#535353",
      }}
      onClick={closeModal}
    >
      <div
        style={{
          padding: "14px 18px",
          backgroundColor: theme.color.background.level1,
          width: "240px",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" , paddingBottom:"28px" }}>
          <OrigamiIcon size={28} color="#4a5bf6" />
          <div style={{ fontSize: "14px", fontWeight: "bold" , color: theme.color.text.default }}>VKX-UI</div>
        </div>

        <MenuSide />
      </div>
    </div>,
    document.body
  );
};

export default LeftMenuModal;
