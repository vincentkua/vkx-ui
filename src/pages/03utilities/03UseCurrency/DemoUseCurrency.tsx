import { useTheme } from "styled-components";
import useCurrency from "../../../utils/useCurrency";

const DemoUseCurrency = () => {
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
        <p>{useCurrency(5678.9)}</p>
        <p>{useCurrency(5678.9, "SGD")}</p>
        <p>{useCurrency(5678.9, "USD")}</p>
      </div>
    </>
  );
};

export default DemoUseCurrency;
