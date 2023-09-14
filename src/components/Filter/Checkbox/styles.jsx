import styled from "styled-components";

export const Label = styled.label`
  position: absolute;
  top: 40%;
  left: 30px;
  transform: translate(0, -50%);
  cursor: pointer;
  a {
    text-decoration: underline;
  }
`;

export const FieldWrapper = styled.div`
  width: 100%;
  height: 37px;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 37px;
  input {
    opacity: 0;
    left: -9999em;
    position: absolute;

    & + label:after {
      opacity: 0;
    }

    &:checked {
      + label:before {
        background-color: #dfecfb;
      }
      + label:after {
        opacity: 1;
      }
    }
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: 20px;

    &:before,
    &:after {
      position: absolute;
    }

    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      left: 0;
      top: 60%;
      transform: translate(0, -20%);
      background-color: transparent;
      border: 1px solid #4d9ffd;
      border-radius: 2px;
    }

    &:after {
      content: url(images/bird.svg);
      position: absolute;
      left: 4px;
      top: 7px;
    }
  }
`;
