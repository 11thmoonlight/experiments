import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-background);
`;

function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("./signup");
  }

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">خوش آمدید</Heading>
      <LoginForm />
      <Heading as="h5">قبلا ثبت نام نکرده اید؟</Heading>
      <Button onClick={handleClick}>ثبت نام</Button>
    </LoginLayout>
  );
}

export default Login;
