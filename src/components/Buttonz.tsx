import styled from "styled-components";

type ButtonzProps = {
  children: React.ReactNode;
  onClick?: () => void; // optional and void if not defined
};

const StyledButton = styled.button`
background-color: ${({ theme }) => theme.color.palette.blue[700]};
color: ${({ theme }) => theme.color.palette.blue[50]};
cursor: pointer;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border: none;
padding: 6px 12px;
border-radius: 4px;

&:hover {
  background-color: ${({ theme }) => theme.color.palette.blue[800]};
}
`;

const Buttonz = ({ children, onClick = () => {} }: ButtonzProps) => {

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default Buttonz;
