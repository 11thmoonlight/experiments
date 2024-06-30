import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 20rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-background);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 4rem 1rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Sidebar />
    </StyledAppLayout>
  );
}

export default AppLayout;

//#eec170 #997b66
