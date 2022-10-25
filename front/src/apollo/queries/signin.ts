import { gql } from '@apollo/client';

export const SIGNIN = gql`
  query Signin($email: EmailAddress!, $password: String, $userType: UserType!) {
    signin(email: $email, password: $password, userType: $userType) {
      id
      firstname
      lastname
      email
      role
      userType
      company
      token {
        token
        expiresIn
      }
    }
  }
`;
