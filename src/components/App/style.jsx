import styled from "styled-components";

export const AppContent = styled.div`
  padding: 160px 60px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  position: relative;
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 30px 10px;
  }
  .tickets {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 650px) {
      margin-top: 10px;
    }
  }
  .logo {
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translate(-50%);
    background-color: #4d9ffd;
    padding: 10px;
    border-radius: 100%;
    img {
      filter: invert(1);
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`;
