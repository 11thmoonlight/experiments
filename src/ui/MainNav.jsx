import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-hover-light);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-svg-sidebar);
    transition: all 0.3rem;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-hover-svg);
  }

  @media (max-width: 550px) {
    &:link,
    &:visited {
      font-size: 1.6rem;
      font-weight: 500;
      padding: 1.2rem 1.2rem;
    }
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/dashboard">
          صفحه اصلی
          <span>
            <GoHomeFill />
          </span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/incomes">
          دریافت ها
          <span>
            <GiReceiveMoney />
          </span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/outcomes">
          پرداخت ها
          <span>
            <GiPayMoney />
          </span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/charts">
          گزارش ها
          <span>
            <FaChartLine />
          </span>
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
