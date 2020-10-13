import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth";
import { useUser } from "../../contexts/user-context";

const NavContainer = styled.nav`
  position: fixed;
  top: 2em;
  right: 2em;
  z-index: 20;
`;

function Nav() {
  const user = useUser();
  const { logout } = useAuth();
  return (
    <NavContainer>
      {user?.email && (
        <Button color="secondary" variant="contained" onClick={logout}>
          Logout
        </Button>
      )}
    </NavContainer>
  );
}

export default Nav;
