import styled from "styled-components";

const RadioInput = styled.input`
  cursor: pointer;
  height: 1.7rem;
  width: 1.7rem;
  margin-top: 0.24rem;
  appearance: none;
  -webkit-appearance: none;

  border: 0.2rem solid #fff;
  background-color: #e8e8e8;
  border-radius: 50%;
  transition: all 0.1s;

  &:focus-visible {
    outline-offset: 0;
  }

  box-shadow: 0 0 0 1px #999;
  outline: 2.5px solid #999;

  &:hover {
    border-width: 0;
    outline-color: #ff5722;
  }

  &:checked {
    box-shadow: 0 0 0 2.5px #ff5722;
    background-color: #ff5722;
    border-width: 0.2rem;

    outline-color: #ff5722;
    background-color: #ff5722;
  }

  &:-webkit-autofill {
    background-color: white !important;
  }

  &:autofill {
    background-color: white !important;
  }
`;

export default RadioInput;
