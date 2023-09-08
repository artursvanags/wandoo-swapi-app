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

export default async function CharacterPage() {
  const client = getClient()
  const { loading, data } = await client.query({query: GET_PEOPLE});

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="flex min-h-screen flex-col justify-between p-2">
      <div className="">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Star Wars Wikipedia 1.0</h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A comprehensive database that provides detailed information about the vast array of characters found in the Star Wars universe. 
        </p>
      </div>
      <Card title="A list of your Star Wars characters" data={data.allPeople.people} />
    </div>
  )
}