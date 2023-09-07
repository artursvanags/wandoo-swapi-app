import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import Card from "@/components/Card"

const GET_PEOPLE = gql`
query GetPeople {
  allPeople {
    people {
      id
      name
    }
  }
}
`;

export default async function Home() {
  const client = getClient()
  const { loading, data } = await client.query({query: GET_PEOPLE});

  if (loading) return <p>Loading...</p>;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      Star Wars Encyclopedia
          <CharacterTable title="A list of your Star Wars characters" data={data.allPeople.people} />
        </main>
  )
}