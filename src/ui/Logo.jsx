import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: auto;
  width: 7.7rem;
  border-radius: 50%;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-1.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
