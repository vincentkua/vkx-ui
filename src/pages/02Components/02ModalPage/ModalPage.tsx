import DemoModal from "./DemoModal";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoModal.tsx
import { useState } from "react";
import ModalCenter from "vkx-ui";
import { useTheme } from "styled-components";

const DemoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();

  return (
    <>
      <ModalCenter showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2 style={{ color: theme.color.text.default }}>Sample Modal</h2>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          praesentium at quas explicabo ratione iste earum dicta aut et iusto a
          suscipit delectus placeat quidem rem, quam aliquid recusandae quo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vel,
          velit pariatur illo voluptatibus necessitatibus aliquam expedita
          dolorum magnam, facilis ipsam nostrum iste vero temporibus sit
          voluptatem obcaecati minus? Ad.
        </p>
      </ModalCenter>
      <button onClick={() => setShowModal(true)}>Show Demo</button>
    </>
  );
};

export default DemoModal;
`

const sourcecode = `//ModalCenter.tsx
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

`

const ModalPage = () => {
  return (
    <>
      <h2>Modal Center</h2>
      <br />
      <br />
      <p>
        The Modal Center component displays an overlay box at the center of the
        screen, typically used for showcasing important content or user
        interactions without navigating away from the current page.
      </p>
      <DemoModal />

      <br />
      <br />
      <br />

      <h4>Sample Usage</h4>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sampleusagecode}
      </CodeSnippet>

      <br />
      <br />

      <h4>Source Code</h4>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sourcecode}
      </CodeSnippet>

    </>
  );
};

export default ModalPage;
