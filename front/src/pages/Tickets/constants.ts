import { Status, Ticket } from '../../types';

const { OPEN, CLOSED, UNDERWAY } = Status;

export const ticketsTableHeaders: string[] = [
  'id',
  'title',
  'content',
  'status',
  'client_id',
  'created_at',
  'updated_at',
];

export const ticketsData: Ticket[] = [
  {
    id: 1,
    title: 'Titre Ticket 1',
    content:
      'Ticket content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    status: OPEN,
    client_id: 1,
    created_at: '2022-10-04T15:33:25.758Z',
    updated_at: null,
  },
  {
    id: 2,
    title: 'Titre Ticket 2',
    content: 'Ticket content 2',
    status: CLOSED,
    client_id: 2,
    created_at: '2022-10-04T15:33:25.758Z',
    updated_at: null,
  },
  {
    id: 3,
    title: 'Titre Ticket 3',
    content: 'Ticket content 3',
    status: UNDERWAY,
    client_id: 3,
    created_at: '2022-10-04T15:33:25.758Z',
    updated_at: null,
  },
  {
    id: 4,
    title: 'Titre Ticket 4',
    content: 'Ticket content 4',
    status: OPEN,
    client_id: 4,
    created_at: '2022-10-04T15:33:25.758Z',
    updated_at: null,
  },
  {
    id: 5,
    title: 'Titre Ticket 5',
    content: 'Ticket content 5',
    status: OPEN,
    client_id: 5,
    created_at: '2022-10-04T15:33:25.758Z',
    updated_at: null,
  },
];
