import { fetchGraphQL } from '@/lib/graphqlClient';

const GET_DOCUMENTS = `
  query GetDocuments {
    documentations(where: {deleted: {_eq: false}, user_id: {_eq: 1}}) {
    id
    name
    status
  }
  }
`;

export default async function DocumentationPage() {
  let data;

  try {
    data = await fetchGraphQL(GET_DOCUMENTS);
    console.log(data)
  } catch (error) {
    return (
      <div className="p-6 text-red-600">
        <p>Failed to load documentation data.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Documentation</h1>
      {data?.documentations?.map((doc) => (
        <div key={doc.id} className="mb-4 border-b pb-4">
          <h2 className="text-xl font-semibold">{doc.name}</h2>
          <p className="text-gray-700">{doc.status}</p>
        </div>
      ))}
    </div>
  );
}