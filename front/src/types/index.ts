import { Dispatch, SetStateAction } from 'react';

export enum Status {
  OPEN = 'Open',
  CLOSED = 'Closed',
  UNDERWAY = 'Underway'
}

export enum Role {
  ADMIN = 'Admin',
  LEAD = 'Lead',
  INTERVENOR = 'Intervenor'
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
  // logged: boolean
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
  created_at: string;
  updated_at: string | null;
}

export interface Signin_signin {
  __typename: 'EmployeeConnected';
  id: string;
  firstname: string;
  email: string;
}

export interface Signin {
  signin: Signin_signin | null;
}

export interface SigninVariables {
  email: string;
  password: string;
}
