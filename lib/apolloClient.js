import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // public GraphQL API
  cache: new InMemoryCache(),
});

export default client;