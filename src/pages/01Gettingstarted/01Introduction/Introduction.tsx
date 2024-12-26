import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Introduction = () => {
  return (
    <>
      <h2>Installation</h2>
      <br />
      <p style={{ textAlign: "justify" }}>
        VKX-UI is an open-source React component library designed to streamline
        your development process by providing reusable components. You can
        integrate it easily into your project by installing it via npm install
        or by copying the source code directly. This library is ideal for
        developers seeking to save time and effort when building applications
        that require frequently used components. VKX-UI’s ready-to-use
        components are crafted to enhance efficiency and maintain consistency
        across projects, making it a valuable tool for developers aiming to
        focus on creating unique features instead of recreating common UI
        elements.
      </p>

      <br />
      <br />
      
      <p>1. Install vkx-ui (our npm package for all components)</p>
      <CodeSnippet language="bash" style={vscDarkPlus}>
        {`npm install vkx-ui`}
      </CodeSnippet>
      <br />
      <p>2. Install styled-components (use for css styling)</p>
      <CodeSnippet language="bash" style={vscDarkPlus}>
        {`npm install styled-components`}
      </CodeSnippet>
      <br />
      <p>3. Install lucide (use for icon library)</p>
      <CodeSnippet language="bash" style={vscDarkPlus}>
        {`npm install lucide`}
      </CodeSnippet>
    </>
  );
};

export default Introduction;
