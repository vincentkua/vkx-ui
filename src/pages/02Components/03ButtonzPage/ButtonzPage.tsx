import DemoButtonz from "./DemoButtonz";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoButtonz.tsx
import { Buttonz } from "vkx-ui";

const DemoButtonz = () => {
    return ( 
        <>
            <Buttonz onClick={()=>alert("sample onclick")}>Sample Button</Buttonz>
        </>
     );
}
 
export default DemoButtonz;
`;

const sourcecode = `//Buttonz.tsx
import styled from "styled-components";

type ButtonzProps = {
  children: React.ReactNode;
  onClick?: () => void; // optional and void if not defined
};

const StyledButton = styled.button\`
  background-color: \${({ theme }) => theme.color.palette.blue[700]};
  color: \${({ theme }) => theme.color.palette.blue[50]};
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;

  &:hover {
    background-color: \${({ theme }) => theme.color.palette.blue[800]};
  }
\`;

const Buttonz = ({ children, onClick = () => {} }: ButtonzProps) => {
  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default Buttonz;
`;

const ButtonzPage = () => {
  return (
    <>
      <h2>Buttonz</h2>
      <br />
      <p>
        Buttonz is a straightforward and versatile button component designed for
        simplicity and ease of use. It serves as a reusable UI element that can
        be styled according to your theme. The component accepts an optional
        onClick event handler, allowing you to define custom behavior when the
        button is clicked. This makes it suitable for a wide range of
        applications, from basic actions to more complex interactive
        functionality, while maintaining a clean and consistent appearance.
      </p>
      <br />
      <DemoButtonz />
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

export default ButtonzPage;
