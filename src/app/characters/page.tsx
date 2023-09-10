import { Metadata } from "next";
import { getClient } from "@/lib/client";
import { GET_PEOPLE } from "@/config/graphql";

import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Characters",
  description:
    "A list of available Stars Wars Characters.",
}


export default async function CharacterPage() {
  const client = getClient()
  const { loading, data } = await client.query({query: GET_PEOPLE});

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="mx-auto flex py-4 sm:pt-32 flex-col justify-center container">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">View characters</h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 pb-4">
          Select from the list below or search the Star Wars character you would like to view. 
        </p>
      <Card data={data.allPeople.people} />
    </div>
  )
}