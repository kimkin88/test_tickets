import styled from "styled-components";

export const _CurrencySwitcher = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: uppercase;
  p {
    margin: 0;
  }
  .currency {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    width: 100%;
    border-radius: 4px;
  }
`;

export const CurBtn = styled.div`
  padding: 8px 0;
  color: #4d9ffd;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  border: 1px solid
    ${({ activeCur, index }) =>
      activeCur === index ? "transparent" : "lightgray"};
  &:hover {
    background-color: #dfecfb;
    z-index: ${({ index, activeCur }) => (activeCur === index ? 2 : 1)};
  }
  border-radius: ${({ index }) => {
    switch (index) {
      case 0:
        return "4px 0 0 4px";
      case 2:
        return "0 4px 4px 0";
      default:
        return 0;
    }
  }};
  &.active {
    background-color: #4d9ffd;
    color: #fff;
  }
`;
