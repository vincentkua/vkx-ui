import styled from "styled-components";

export const StyledRedText = styled.div`
  color: #ff0000;
  font-size: 12px;
`;

export const SideMenuSubHeader = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
`;

export const SideMenuList = styled.ul`
  padding-left: 18px;
  font-size: 14px;
  margin-bottom: 8px;

  > li {
    margin-bottom: 8px;
    cursor: pointer;
    color: #6b6b6b;
    text-decoration: underline;
    /* list-style-type:none; */
  }
`;

export const LeftNavArea = styled.div`
  flex: 0 0 200px;
  background-color: #f5f5f5;
  overflow-y: scroll;
`;

export const RightContentArea = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
  overflow-y: scroll;
  padding: 12px;
`;
