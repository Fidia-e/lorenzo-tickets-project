import { Status } from '../../apollo/__generated__/globalTypes';
import { GetTicketById_getTicketById } from '../../apollo/queries/__generated__/GetTicketById';

export const emptyTicket: GetTicketById_getTicketById = {
  __typename: 'Ticket',
  id: '' as unknown as number,
  title: '',
  content: '',
  status: '' as Status,
  client: {
    __typename: 'Client',
    id: '' as unknown as number,
    email: '',
    company: '',
  },
  messages: [
    {
      __typename: 'Message',
      id: '' as unknown as number,
      content: '',
      client_id: '' as unknown as number,
      client: {
        __typename: 'Client',
        email: '',
        id: '',
      },
      employee_id: '' as unknown as number,
      employee: {
        __typename: 'Employee',
        id: '' as unknown as number,
        firstname: '',
        lastname: '',
      },
      created_at: '',
      updated_at: '',
    },
  ],
  employees: [
    {
      __typename: 'Employee',
      id: '' as unknown as number,
      firstname: '',
      lastname: '',
    },
  ],
  created_at: '',
  updated_at: '',
};
