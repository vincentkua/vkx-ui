import DemoScrollToTop from "./DemoScrollToTop";
import { Prism as CodeSnippet } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleusagecode =`//DemoScrollToTop.tsx
import { Buttonz , scrollToTop } from "vkx-ui";

const DemoScrollToTop = () => {
  return (
    <>
      <div
        id="sampleDiv"
        style={{
          padding: "10px",
          width: "200px",
          height: "200px",
          overflowY: "scroll",
          border: "1px solid gray",
        }}
      >
        <h5>Sample Text</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          deserunt veritatis voluptatem tempore facilis quis itaque animi
          necessitatibus, quidem aut esse aliquam cum minus consequuntur at non
          asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Minima soluta ipsum consequatur, amet doloremque, quis id dolore,
          quaerat dicta delectus nemo nobis sit ipsa numquam totam quia
          accusantium. Quasi, sequi.
        </p>
      </div>
      <br />
      <Buttonz onClick={() => scrollToTop("sampleDiv")}>Sample Scroll</Buttonz>
    </>
  );
};

export default DemoScrollToTop;
`

const sourcecode = `//scrollToTop.tsx
export const scrollToTop = (elementId: string) => {
  setTimeout(() => {
    const selectedContentDiv = document.getElementById(elementId);
    if (selectedContentDiv) {
      selectedContentDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, 100); // 0.1-second delay
};

`

const ScrollToTopPage = () => {
  return (
    <>
      <h2>scrollToTop</h2>
      <br />
      <p>
        The scrollToTop utility is designed to scroll the content back to the
        top after a page navigation. To ensure a smoother experience, a
        0.1-second delay has been added, allowing the scrolling to occur only
        after the navigation process has been fully completed.
      </p>
      <br />
      <DemoScrollToTop />

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

export default ScrollToTopPage;
