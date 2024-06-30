import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-tifany-3);
  padding: 0%.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  text-align: center;

  &:-webkit-autofill {
    background-color: white !important;
  }

  &:autofill {
    background-color: white !important;
  }
`;

export default Input;
