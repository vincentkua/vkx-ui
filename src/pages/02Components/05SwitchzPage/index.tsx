import DemoSwitchz from "./DemoSwitchz";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoSwitchz.tsx
import { useState } from "react";
import { Switchz } from "vkx-ui";

const DemoSwitchz = () => {
  const [demoChecked, setDemoChecked] = useState(true);

  return (
    <>
      <Switchz
        isChecked={demoChecked}
        onChange={() => setDemoChecked(!demoChecked)}
      />
    </>
  );
};

export default DemoSwitchz;
`;

const sourcecode = `//Switchz.tsx
import styled from "styled-components";

const ToggleSwitch = styled.label\`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #797878;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:checked + span:before {
    transform: translateX(22px);
  }
\`;

type SwitchzProps = {
  isChecked?: boolean;
  onChange?: () => void;
};

const Switchz = ({ isChecked, onChange }: SwitchzProps) => {
  return (
    <ToggleSwitch>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span></span>
    </ToggleSwitch>
  );
};

export default Switchz;
`;

const SwitchzPage = () => {
  return (
    <>
      <h2>Switchz</h2>
      <br />
      <p>
        Switchz is a simple toggle switch button. It allows users to toggle
        between two states, typically "on" and "off". This component is useful
        for settings, preferences, and other binary options in your application.
        It is built using styled-components for easy customization and theming.
        The Switchz component accepts props such as isChecked to control its
        state and onChange to handle state changes.
      </p>
      <br />
      <DemoSwitchz />

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

export default SwitchzPage;