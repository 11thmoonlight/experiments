import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-md);
`;

const StyledOption = styled.option`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: green;
  }
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <StyledOption value={option.value} key={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
};

export default Select;
