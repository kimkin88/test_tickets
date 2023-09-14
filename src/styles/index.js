import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #595959;
    background-color: #ebeaea;
  }
`;
