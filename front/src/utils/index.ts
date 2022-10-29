export const isActiveClassName = (isActive: boolean): string => (isActive ? 'active' : '');

export enum ItemType {
  MESSAGE = 'Message',
  TICKET = 'Ticket',
  EMPLOYEE = 'Employee',
  CLIENT = 'Client',
}
