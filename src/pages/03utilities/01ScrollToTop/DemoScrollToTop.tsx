import Buttonz from "../../../components/Buttonz";
import { scrollToTop } from "../../../utils/scrollToTop";

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
