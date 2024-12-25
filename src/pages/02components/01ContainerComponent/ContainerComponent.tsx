import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//SampleUsage.tsx
import { Container } from "vkx-ui";

const SampleUsage = () => {
  return (
    <>
      <Container>
        <h3>Title</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quae, ab cumque officia doloremque voluptates ratione facere, aliquid
          laudantium, maxime vel assumenda? Eaque quam vero quasi accusantium
          est ipsam eveniet?
        </p>
      </Container>
    </>
  );
};

export default SampleUsage;
`;

const componentSourceCode = `import React from "react";
import styled from "styled-components";

type Childprops = {
  children: React.ReactNode;
};

const Container = ({ children }: Childprops) => {
  const StyledContainerDiv = styled.div\`
    max-width: 1200px;
    margin: auto;
    @media (max-width: 1200px) {
      max-width: 1000px;
    }
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  \`;

  return (
    <>
      <StyledContainerDiv>{children}</StyledContainerDiv>
    </>
  );
};

export default Container;

`

const ContainerComponent = () => {
  return (
    <>
      <h2>Container</h2>
      <br />
      <p>
        The container centers your content horizontally. It's the most basic
        layout element. The max-width was set at 100% on mobile device and up to
        1200px on desktop device when the width is more than 1200px. ok
      </p>

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
        {componentSourceCode}
      </CodeSnippet>
    </>
  );
};

export default ContainerComponent;
