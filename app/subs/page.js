import React from "react";
import { fetchGraphQL } from '@/lib/graphqlClient';
import Subs from '@/components/subs'

const GET_SUBS = `
  query GetBusinessEvents {
    business_events(where: {deleted: {_eq: false}, business_id: {_eq: 1}}, limit: 10) {
      reason
      title
      start_date_time
      end_date_time
    }
  }
`;

export default async function SubsPage() {
    let data;

    try {
        data = await fetchGraphQL(GET_SUBS);
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
      <Subs data={data}/>
    );
}
