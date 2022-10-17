import { gql } from '@apollo/client';

export const SIGNIN = gql`
  query Signin($email: EmailAddress!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      firstname
      lastname
      email
      role
      token {
        token
        expiresIn
      }
    }
  }
`;
