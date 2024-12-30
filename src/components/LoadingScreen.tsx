//LoadingScreen.tsx
import { LoaderCircleIcon } from "lucide-react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

const LoadingScreen = () => {
  const RotatingDiv = styled.div`
    display: flex;
    animation: rotateInfinite 1s linear infinite;
    @keyframes rotateInfinite {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

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
        flexDirection: "column",
        color: "#c7c7c7",
      }}
    >
      <RotatingDiv style={{ textAlign: "center" }}>
        <LoaderCircleIcon size={36} />
      </RotatingDiv>
      <div style={{ marginTop: "10px" }}>Please Wait ...</div>
    </div>,
    document.body // With CreatePortal, Render outside the parent, directly into the <body>
  );
};

export default LoadingScreen;
