import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { EmployeeLogged } from '../types';

const httpLink = createHttpLink({
  uri: 'http://localhost:3005'
});

const authLink = setContext((_, { headers }) => {
  const employeeJSON = localStorage.getItem('employee') as string;

  const employeeParsed = JSON.parse(employeeJSON) as EmployeeLogged;

  const token = employeeParsed.token;

  return {
    headers: {
      ...headers,
      Authorization: token !== '' ? `Bearer ${token}` : ''
    } as unknown
  };
});

// création du client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
