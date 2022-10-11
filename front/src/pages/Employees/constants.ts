import { Role, Employee } from '../../types';

const { ADMIN, LEAD, INTERVENOR } = Role;

export const employeesTableHeaders: string[] = [
  'id',
  'firstname',
  'lastname',
  'email',
  'password',
  'role',
  'created_at',
  'updated_at'
];

export const employeesData: Employee[] = [
  {
    id: 1,
    firstname: 'Prénom employee 1',
    lastname: 'Nom employee 1',
    email: 'employee1@test.test',
    password: '1234',
    role: ADMIN,
    created_at: '2022-10-10T19:24:00.292Z',
    updated_at: null
  },
  {
    id: 2,
    firstname: 'Prénom employee 2',
    lastname: 'Nom employee 2',
    email: 'employee2@test.test',
    password: '1234',
    role: LEAD,
    created_at: '2022-10-10T19:24:00.292Z',
    updated_at: null
  },
  {
    id: 3,
    firstname: 'Prénom employee 3',
    lastname: 'Nom employee 3',
    email: 'employee3@test.test',
    password: '1234',
    role: INTERVENOR,
    created_at: '2022-10-10T19:24:00.292Z',
    updated_at: null
  },
  {
    id: 4,
    firstname: 'Prénom employee 4',
    lastname: 'Nom employee 4',
    email: 'employee4@test.test',
    password: '1234',
    role: INTERVENOR,
    created_at: '2022-10-10T19:24:00.292Z',
    updated_at: null
  },
  {
    id: 5,
    firstname: 'Prénom employee 5',
    lastname: 'Nom employee 5',
    email: 'employee5@test.test',
    password: '1234',
    role: INTERVENOR,
    created_at: '2022-10-10T19:24:00.292Z',
    updated_at: null
  }
];
