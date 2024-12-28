import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const step1code = `// styled.d.ts
  import "styled-components";
  import { ThemeType } from "vkx-ui";
  
  declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
  }
`;

const step2code = `// Providers.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkMode, lightMode } from "vkx-ui";

const GlobalStyles = createGlobalStyle\`
    body{
        background:\${({ theme }) => theme.color.background.default};
        color:\${({ theme }) => theme.color.text.default};
        transition: all 0.5s linear;
    }
\`;

const Providers = () => {
  const [mytheme, setMytheme] = useState("light");
  const themeToggler = () => {
    mytheme === "light" ? setMytheme("dark") : setMytheme("light");
  };
  return (
    <>
      <ThemeProvider theme={mytheme === "light" ? lightMode : darkMode}>
        <BrowserRouter>
          <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Providers;
`;

const sampleStyledComponent = `//styled.component.tsx
import styled from "styled-components";

export const StyledCard = styled.div\`
  height: 100%;
  flex-grow: 1;
  cursor: pointer;
  background-color: \${({ theme }) => theme.color.background.default};
  color: \${({ theme }) => theme.text};
  &:hover {
    background-color: \${({ theme }) => theme.color.background.hover};
    transform: scale(1.03);
    transition: all 0.01s linear;
  }
\`;
`;

const sampleInlineMethod = `//SampleInlineMethod.tsx
import { useTheme } from "styled-components";

const SampleInline = () => {
  const theme = useTheme();
  return (
    <>
      <p style={{ color: theme.color.text.label1 }}>Sample Inline</p>
    </>
  );
};

export default SampleInline;
`;

const DarkModePage = () => {
  return (
    <>
      <h2>Dark Mode</h2>
      <br />
      <p style={{ textAlign: "justify" }}>
        VKX-UI components are thoughtfully designed using a robust set of design
        tokens, ensuring seamless support for both light and dark modes. These
        components are ready-to-use, providing an intuitive experience across
        different themes. Alternatively, if you prefer a more tailored approach,
        you can directly utilize the design tokens to create and customize your
        own components, complete with dark mode compatibility. This flexibility
        allows you to maintain consistency with the design system while meeting
        your unique application needs.
      </p>

      <br />
      <br />

      <h4>Setting Up</h4>
      <br />
      <p>1. Create src/styled.d.ts (for intelisense typing)</p>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {step1code}
      </CodeSnippet>

      <br />
      <p>2. Add ThemeProvider to the src/Providers.tsx</p>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {step2code}
      </CodeSnippet>

      <br />
      <br />

      <h4>How to use</h4>
      <br />
      <p>1. Use with styled-components</p>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sampleStyledComponent}
      </CodeSnippet>

      <br />

      <p>2. Use with inline method</p>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {sampleInlineMethod}
      </CodeSnippet>
    </>
  );
};

export default DarkModePage;
