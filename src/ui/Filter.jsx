import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Proptypes from "prop-types";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.6rem;

  @media (max-width: 947px) {
    margin-bottom: 1rem;
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-hover-light);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: #97bd89;
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: #b0d5a3;
    color: var(--color-brand-50);
  }

  @media (max-width: 628px) {
    font-size: 1.2rem;
    padding: 0.44rem 0.5rem;
  }

  @media (max-width: 490px) {
    font-size: 1rem;
    padding: 0.44rem 0.5rem;
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

Filter.propTypes = { filterField: Proptypes.any, options: Proptypes.any };

export default Filter;
