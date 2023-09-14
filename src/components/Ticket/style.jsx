import styled from "styled-components";

export const _Ticket = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid lightgrey;
  overflow: hidden;
  .image-wrapper {
    padding: 20px 10px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
    }
  }
`;
