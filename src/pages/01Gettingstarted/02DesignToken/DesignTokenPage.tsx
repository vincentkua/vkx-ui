import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const step1code = `// styled.d.ts
  import "styled-components";
  import { ThemeType } from "vkx-ui";
  
  declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
  }
`

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
`
const DesignTokenPage = () => {
  return (
    <>
      <h2>Design Token</h2>
      <br />
      <p style={{ textAlign: "justify" }}>
        VKX-UI React component library is built using styled-components, ensuring
        a modern and dynamic approach to styling. It leverages a Design Language
        System (DLS) with design tokens as a core requirement, enabling
        consistent theming and maintaining design standards across all
        components. By utilizing these design tokens, the library ensures
        seamless integration with your project’s styling system while promoting
        reusability and scalability. This approach not only standardizes the
        design language but also allows for easy customization, ensuring
        components align with your brand’s visual identity. The combination of
        styled-components, design tokens, and DLS provides a robust foundation
        for creating visually cohesive and maintainable user interfaces.
      </p>

      <br />
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
    </>
  );
};

export default DesignTokenPage;
