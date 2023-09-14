import styled from "styled-components";

export const _Info = styled.div`
  border-left: 1px solid lightgray;
  width: 100%;
  height: 100%;
  padding: 10px;

  .info-head {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .time {
      font-size: 20px;
    }
    span {
      white-space: nowrap;
      font-size: 8px;
      line-height: 8px;
      color: gray;
    }
    .air {
      text-align: center;
      p {
        white-space: nowrap;
        font-size: 8px;
        line-height: 8px;
        color: gray;
      }
      div {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1px;
        .line {
          height: 0.5px;
          background-color: lightgray;
        }
        img {
          transform: rotate(45deg);
          opacity: 0.5;
        }
      }
    }
    .arrival {
      text-align: right;
    }
  }
`;
