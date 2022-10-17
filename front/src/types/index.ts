import { Dispatch, SetStateAction } from 'react';

export enum Status {
  OPEN = 'Open',
  CLOSED = 'Closed',
  UNDERWAY = 'Underway'
}

export enum Role {
  ADMIN = 'Admin',
  LEAD = 'Lead',
  INTERVENOR = 'Intervenor',
  UNKNOWN = 'unknown'
}

export interface FieldBaseProps {
  identifier: string;
  placeholder: string;
  label: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
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
  email: string;
  token: Signin_signin_token;
  role: Role;
}

export interface EmployeeLogged {
  logged: boolean;
  id: number;
  email: string;
  role: Role;
  token: string;
}

export interface Signin {
  signin: Signin_signin;
}

export interface SigninVariables {
  email: string;
  password: string;
}

export type Nullable<T> = T | null;
