/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserType, Role } from '../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: Signin
// ====================================================

export interface Signin_signin_token {
  __typename: 'Token';
  token: string;
  expiresIn: string;
}

export interface Signin_signin {
  __typename: 'UserConnected';
  id: any;
  firstname: string | null;
  lastname: string | null;
  email: any;
  role: Role | null;
  userType: UserType;
  company: string | null;
  token: Signin_signin_token | null;
}

export interface Signin {
  /**
   * Authentification de l'utilisateur
   */
  signin: Signin_signin;
}

export interface SigninVariables {
  email: any;
  password?: string | null;
  userType: UserType;
}
