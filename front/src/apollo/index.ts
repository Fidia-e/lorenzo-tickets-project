import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';

const httpLink = createHttpLink({
  uri: 'http://localhost:3005',
  fetch
});

const authLink = setContext((_, { headers }) => {
  const userJSON = localStorage.getItem('user');

  // si on est connecté
  if (userJSON !== null && Boolean((JSON.parse(userJSON) as Record<string, unknown>).token)) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${(JSON.parse(userJSON) as Record<string, unknown>).token as string}`
      } as unknown
    };
  }

  // si on est pas connecté... (pas de user...)
  return {
    ...(headers as Record<string, unknown>)
  };
});

// création du client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
