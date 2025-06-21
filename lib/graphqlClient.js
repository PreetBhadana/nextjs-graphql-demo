import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://example.com/graphql';
const adminSecret = '********************';

export const client = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': adminSecret,
  },
});

export async function fetchGraphQL(query, variables = {}) {
  try {
    return await client.request(query, variables);
  } catch (err) {
    console.error('❌ GraphQL error:', err);
    throw err;
  }
}