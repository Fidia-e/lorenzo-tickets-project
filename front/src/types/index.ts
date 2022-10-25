import { Dispatch, SetStateAction } from 'react';

export enum Status {
  OPEN = 'open',
  CLOSED = 'closed',
  UNDERWAY = 'underway',
}

export enum Role {
  ADMIN = 'admin',
  LEAD = 'lead',
  INTERVENOR = 'intervenor',
}

export enum UserType {
  EMPLOYEE = 'employee',
  CLIENT = 'client',
}

export interface FieldBaseProps {
  identifier: string;
  placeholder: string;
  label: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
}

export interface UserLoginProps {
  setError: Dispatch<SetStateAction<boolean>>;
}

// TODO change once we have retrieve type from back
export interface Ticket {
  id: number;
  title: string;
  content: string;
  status: Status;
  client_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface Message {
  id: number;
  content: string;
  ticket_id: number;
  employee_id: number | null;
  client_id: number | null;
  created_at: string;
  updated_at: string | null;
}

export interface Client {
  // logged: boolean,
  id: number;
  email: string;
  company: string;
  created_at: string;
  updated_at: string | null;
}

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
  created_at: string;
  updated_at: string | null;
}

interface Signin_signin_token {
  token: string;
  expiresIn: string;
}

interface Signin_signin {
  id: number;
  firstname?: string;
  lastname?: string;
  email: string;
  role?: Role;
  userType: UserType;
  company?: string;
  token: Signin_signin_token;
}

export interface UserLogged {
  logged: boolean;
  id: number;
  email: string;
  role?: Role;
  userType: UserType;
  token: string;
}

export interface Signin {
  signin: Signin_signin;
}

export interface SigninVariables {
  email: string;
  password?: string;
  userType: UserType;
}

export type Nullable<T> = T | null;
