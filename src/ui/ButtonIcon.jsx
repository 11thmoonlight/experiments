import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-hover-light);
  }

  &:active,
  &:focus {
    outline: none;
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--colorbrand-600);

    &:hover {
      color: var(--color-hover-svg);
    }
  }
`;

export default ButtonIcon;
