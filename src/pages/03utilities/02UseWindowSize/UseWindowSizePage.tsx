import DemoUseWindowSize from "./DemoUseWindowSize";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoUseWindowSize.tsx
import { useTheme } from "styled-components";
import { useWindowSize } from "vkx-ui";

const DemoUseWindowSize = () => {
  const { isMobile, width, height } = useWindowSize();
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          border: \`1px solid \${theme.color.border.level1}\`,
          padding: "10px",
          width: "200px",
          backgroundColor: theme.color.background.level1,
        }}
      >
        <h5 style={{ paddingBottom: "8px" }}>Sample result</h5>
        <p>isMobile = {isMobile ? "true" : "false"}</p>
        <p>height = {height}</p>
        <p>width = {width}</p>
      </div>
    </>
  );
};

export default DemoUseWindowSize;
`

const sourcecode = `//useWindowSize.tsx
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 760,
  });

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile: window.innerWidth <= 760,
        });
      });
    };

    handleResize(); // Initial call to set the correct size

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowSize;
};

`

const UseWindowSizePage = () => {
  return (
    <>
      <h2>useWindowSize</h2>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        accusamus fugit officiis quo odio itaque ipsam sequi porro ipsa quidem
        omnis, nemo quam molestias natus molestiae, unde dolor magnam velit.
      </p>
      <br />
      <DemoUseWindowSize />

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

export default UseWindowSizePage;
