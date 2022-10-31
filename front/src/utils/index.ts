import { Status } from '../apollo/__generated__/globalTypes';
const { open, closed, underway } = Status;

export const isActiveClassName = (isActive: boolean): string => (isActive ? 'active' : '');

export enum ItemType {
  MESSAGE = 'Message',
  TICKET = 'Ticket',
  EMPLOYEE = 'Employee',
  CLIENT = 'Client',
}

export const ticketStatusClassName = (status: string): string => {
  switch (status) {
    case open:
      return 'blue-status';
    case closed:
      return 'red-status';
    case underway:
      return 'yellow-status';
    default:
      return '';
  }
};

export const ticketStatusTraduction = (status: string): string => {
  switch (status) {
    case open:
      return 'ouvert';
    case closed:
      return 'fermé';
    case underway:
      return 'en cours';
    default:
      return '';
  }
};
