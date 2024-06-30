import styled from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../features/authentication/SignupForm";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-background);
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <SignupForm />
    </SignupLayout>
  );
}

export default Signup;
