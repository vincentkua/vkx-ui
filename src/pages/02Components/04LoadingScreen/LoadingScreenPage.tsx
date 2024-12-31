import DemoLoadingScreen from "./DemoLoadingScreen";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoLoadingScreen.tsx
import { useEffect, useState } from "react";
import Buttonz from "../../../components/Buttonz";
import LoadingScreen from "../../../components/LoadingScreen";

const DemoLoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (showLoading) {
      const timeout = setTimeout(() => {
        setShowLoading(false);
      }, 3000); // 3 seconds timeout
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showLoading]);

  return (
    <>
      <Buttonz onClick={() => setShowLoading(true)}>Show Demo (3s)</Buttonz>
      {showLoading && <LoadingScreen />}
    </>
  );
};

export default DemoLoadingScreen;
`;

const sourcecode = `//LoadingScreen.tsx
import { LoaderCircleIcon } from "lucide-react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

const RotatingDiv = styled.div\`
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
\`;

const LoadingScreen = () => {
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
`

const LoadingScreenPage = () => {
  return (
    <>
      <h2>Loading Screen</h2>
      <br />
      <p>
        The Loading Screen Component is a full-page overlay designed to keep
        users informed during processing tasks. It features a rotating icon
        alongside the text "Please wait," making it ideal for scenarios like
        data uploads or downloads. This component enhances user experience by
        providing a clear visual cue that an operation is in progress.
      </p>
      <br />
      <DemoLoadingScreen />

      <br />
      <br />
      <br />

      <h4>Sample Usage </h4>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sampleusagecode}
      </CodeSnippet>

      <br />
      <br />

      <h4>Source Code </h4>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sourcecode}
      </CodeSnippet>
    </>
  );
};

export default LoadingScreenPage;
