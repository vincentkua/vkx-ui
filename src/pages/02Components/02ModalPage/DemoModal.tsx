import { useState } from "react";
import ModalCenter from "../../../components/ModalCenter";
import { useTheme } from "styled-components";

const DemoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();

  return (
    <>
      <ModalCenter showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2 style={{ color: theme.color.text.default }}>Sample Modal</h2>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          praesentium at quas explicabo ratione iste earum dicta aut et iusto a
          suscipit delectus placeat quidem rem, quam aliquid recusandae quo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vel,
          velit pariatur illo voluptatibus necessitatibus aliquam expedita
          dolorum magnam, facilis ipsam nostrum iste vero temporibus sit
          voluptatem obcaecati minus? Ad.
        </p>
      </ModalCenter>
      <button onClick={() => setShowModal(true)}>Show Demo</button>
    </>
  );
};

export default DemoModal;
