import styled from "styled-components";

export const StyledRedText = styled.div`
  color: #ff0000;
  font-size: 12px;
`;

export const SideMenuSubHeader = styled.div`
  padding-bottom: 4px;
  color: ${({theme})=>theme.color.text.header};
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
    color: #888888;
    text-decoration: underline;
    /* list-style-type:none; */
  }
`;

export const LeftNavArea = styled.div`
  flex: 0 0 220px;
  background-color: ${({theme})=>theme.color.background.default};
  overflow-y: scroll;
  border-right: 1px solid ${({theme})=>theme.color.border.level1};
  padding: 18px;
`;

export const RightContentArea = styled.div`
  flex-grow: 1;
  background-color: ${({theme})=>theme.color.background.default};
  overflow-y: scroll;
  padding: 18px;
`;
