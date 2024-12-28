//ModalCenter.tsx
import { XIcon } from "lucide-react";
import ReactDOM from "react-dom";
import { useTheme } from "styled-components";

type OverlayModalType = {
  closeModal: () => void;
  children: React.ReactNode;
  showModal: boolean;
};

const ModalCenter = ({ closeModal, children, showModal }: OverlayModalType) => {
  const theme = useTheme();
  if (showModal) {
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
          alignItems: "center",
          justifyContent: "center",
          color: "#535353",
        }}
        onClick={closeModal}
      >
        <div
          style={{
            backgroundColor: "none",
            width: "90%",
            maxWidth: "1200px",
            height: "90%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "row-reverse",
              paddingBottom: "8px",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            <XIcon />
          </div>
          <div
            style={{
              backgroundColor: theme.color.background.level2,
              maxHeight: "90%",
              overflowY: "scroll",
              borderRadius: "8px",
              padding: "18px",
              marginBottom: "40px", // reserve for mobile device bottom button
            }}
            onClick={(e) => e.stopPropagation()} // disable the click to close event from the parent
          >
            {children}
          </div>
        </div>
      </div>,
      document.body // With CreatePortal, Render outside the parent, directly into the <body>
    );
  } else {
    return <></>;
  }
};

export default ModalCenter;
