import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Link as MUILink,
} from "@material-ui/core";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;

  a {
    text-decoration: none !important;
    margin-left: 1em;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40em;
  height: 40em;
  max-height: 90vh;
  max-width: 90vw;
`;

const Error = styled.p`
  font-size: 0.8em;
  color: red;
  height: 1em;
`;

function Register() {
  const { signUp, fetching } = useAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSignUp(event) {
    event.preventDefault();
    if (email && password) {
      const response = await signUp(email, password);
      if (response) setError(response.error.data.message);
    }
  }

  return (
    <Container>
      <Paper elevation={3}>
        <StyledForm onSubmit={handleSignUp}>
          <Typography component="h1" variant="h2">
            Register
          </Typography>
          <TextField
            variant="outlined"
            id="username"
            label="Email"
            helperText="Please enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <TextField
            variant="outlined"
            id="password"
            label="Password"
            helperText="Please enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={fetching && true}
            >
              Submit
            </Button>
            <MUILink component={Link} to="/login">
              <Button variant="contained" color="secondary">
                Go to Login
              </Button>
            </MUILink>
          </div>
          <Error>{error}</Error>
        </StyledForm>
      </Paper>
    </Container>
  );
}

export default Register;
