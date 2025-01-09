import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const step1code = `// designToken.tsx
const palette = {
  white: "#FFFFFF",
  black: "#000000 ",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
};

export const lightMode = {
  color: {
    palette,
    background: {
      default: palette.white,
      level1: palette.slate[50],
      level2: palette.slate[200],
      hover1: palette.slate[100],
      hover2: palette.slate[200],
    },
    border:{
      default: "#e6e6e6",
      level1: palette.slate[200],
    },
    text: {
      default: palette.slate[900],
      header: palette.slate[900],
      content: palette.slate[600],
      label: palette.slate[600],
      label1: palette.gray[300],
      label2: palette.gray[300],
    },
  },
};

export const darkMode = {
  color: {
    palette,
    background: {
      default: palette.gray[950],
      level1: "#181818",
      level2: "#202020",
      hover1: "#222222",
      hover2: palette.gray[900],
    },
    border:{
      default: "#181818",
      level1: "#222222",
    },
    text: {
      default: "#FAFAFA",
      header: palette.white,
      content: palette.slate[100],
      label: palette.slate[500],
      label1: palette.gray[700],
      label2: palette.gray[800],
    },
  },
};

export type ThemeType = typeof lightMode;
`;

const DesignTokenPage = () => {
  return (
    <>
      <h2>Design Token</h2>
      <br />
      <p style={{ textAlign: "justify" }}>
        VKX-UI React component library is built using styled-components,
        ensuring a modern and dynamic approach to styling. It leverages a Design
        Language System (DLS) with design tokens as a core requirement, enabling
        consistent theming and maintaining design standards across all
        components. By utilizing these design tokens, the library ensures
        seamless integration with your project’s styling system while promoting
        reusability and scalability. This approach not only standardizes the
        design language but also allows for easy customization, ensuring
        components align with your brand’s visual identity. The combination of
        styled-components, design tokens, and DLS provides a robust foundation
        for creating visually cohesive and maintainable user interfaces. You can
        import the design token from vkx-ui or simply copy the source code below.
      </p>

      <br />
      <br />

      <h4>Source Code</h4>
      <CodeSnippet language="tsx" style={vscDarkPlus}>
        {step1code}
      </CodeSnippet>

      <br />
    </>
  );
};

export default DesignTokenPage;
