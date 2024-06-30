import styled from "styled-components";
import PropTypes from "prop-types";

const StyledStat = styled.div`
  background-color: var(--color-hover-light);
  border: 1px solid var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
  border-radius: var(--border-radius-sm);

  @media (max-width: 1470px) {
    padding: 1rem;
  }

  @media (max-width: 1380px) {
    padding: 0.5rem;
  }

  @media (max-width: 740px) {
    margin-bottom: 1.5rem;
  }
`;

const Icon = styled.div`
  grid-row: 1/-1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  @media (max-width: 1470px) {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  @media (max-width: 1470px) {
    font-size: 1.2rem;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 1470px) {
    font-size: 2rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

Stat.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  color: PropTypes.any,
};

export default Stat;
