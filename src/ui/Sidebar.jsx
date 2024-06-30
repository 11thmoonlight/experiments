import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-sidebar);
  padding: 1.2rem 2.4rem;
  border-left: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  grid-column: 2/ 1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 700px) {
    padding: 1.2rem 1.2rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
