import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthnicated } = useUser();

  useEffect(
    function () {
      if (!isAuthnicated && !isLoading) navigate("/login");
    },
    [isAuthnicated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthnicated) return children;
}

ProtectedRoute.propTypes = { children: PropTypes.any };

export default ProtectedRoute;
