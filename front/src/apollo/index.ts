import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3005',
});

const authLink = setContext((_, { headers }) => {
  const employeeJSON = localStorage.getItem('employee');

  // si on est pas connecté... (pas de user...)
  if (employeeJSON == null || Boolean((JSON.parse(employeeJSON) as Record<string, unknown>).token)) {
    return {
      ...(headers as Record<string, unknown>),
    };
  }

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${(JSON.parse(employeeJSON) as Record<string, unknown>).token as string}`,
    } as unknown,
  };
});

// création du client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
