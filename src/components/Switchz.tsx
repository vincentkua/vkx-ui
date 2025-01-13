import styled from "styled-components";

const ToggleSwitch = styled.label`
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
`;

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
