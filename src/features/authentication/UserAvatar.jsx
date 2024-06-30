import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-weight: 500;
  font-size: 2.5rem;
  color: var(--color-grey-600);
  background-color: var(--color-hover-light);
  padding: 0.1rem 0 0.1rem 2rem;
  border-radius: 5px 30px 30px 5px;

  @media (max-width: 700px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    padding: 0;
    border-radius: 50%;
  }
`;

const StyledName = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Avatar = styled.img`
  display: flex;
  width: 5rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media (max-width: 470px) {
    display: none;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { name, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || "default-user.jpg"} alt={`Avatar of ${name}`} />
      <StyledName>{name}</StyledName>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
