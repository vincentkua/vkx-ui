import { useTheme } from "styled-components";
import { useWindowSize } from "../../../utils/useWindowSize";

const DemoUseWindowSize = () => {
  const { isMobile, width, height } = useWindowSize();
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          border: `1px solid ${theme.color.border.level1}`,
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
