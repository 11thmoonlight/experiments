import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
      align-items: stretch;
      justify-content: stretch;
    `}


    ${(props) =>
    props.type === "customized" &&
    css`
      justify-content: space-around;
      align-items: stretch;

      @media (max-width: 1475px) {
        display: block;
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
