import DemoUseCurrency from "./DemoUseCurrency";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode = `//DemoUseCurrency.tsx
import { useTheme } from "styled-components";
import { useCurrency } from "vkx-ui";

const DemoUseCurrency = () => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          border: \`1px solid \${theme.color.border.level1}\`,
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
`;


const sourcecode = `//useCurrency.tsx
import { useMemo } from "react";

const useCurrency = (amount: number, currency = "MYR") => {
  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat("en-MY", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  }, [amount, currency]);

  return formattedAmount;
};

export default useCurrency;
`

const UseCurrencyPage = () => {
  return (
    <>
      <h2>useCurrency</h2>
      <br />
      <p>
        The useCurrency utility is a custom hook designed to format numbers into
        a readable currency format. By default, it uses the Malaysian Ringgit
        (MYR) as the currency, making it ideal for applications requiring local
        formatting. However, the hook is highly customizable, allowing you to
        specify a different currency to suit your needs. This flexibility makes
        it a versatile solution for handling various currency formats in a
        consistent and user-friendly way.
      </p>
      <br />
      <DemoUseCurrency />

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

export default UseCurrencyPage;
