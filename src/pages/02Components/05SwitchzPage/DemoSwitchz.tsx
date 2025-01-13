import { useState } from "react";
import Switchz from "../../../components/Switchz";

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
