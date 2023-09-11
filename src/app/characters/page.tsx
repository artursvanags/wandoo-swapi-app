import { Metadata } from "next";
import { getClient } from "@/lib/client";
import { GET_PEOPLE } from "@/config/graphql";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertIcons } from "@/config/icons";

import Table from "@/components/Table";

async function getPeopleData() {
  const client = getClient();
   
  try {
    const { data: res, error } = await client.query({
      query: GET_PEOPLE,
      errorPolicy: "all",
    });
    return { res, error };
  } catch (error) {
    return { error };
  }
}

export const metadata: Metadata = {
  title: "Characters",
  description: "A list of available Stars Wars Characters.",
};

type handleErrorsProp = {
  error: any,
  data: any
}

function handleErrors({error, data}:handleErrorsProp) {
  if (error || !data || data.allPeople.people.length === 0) {
    const errorMessage = error ? error.message : 'No Data Available';
    return (
      <div className="mt-8">
        <Alert variant={error ? 'destructive' : 'default'}>
          <AlertIcons.Error className="h-4 w-4" />
          <AlertTitle>{error ? 'Error' : 'Info'}</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      </div>
    );
  }
  return null;
}

export default async function CharacterPage() {
  try {
    const { res, error } = await getPeopleData();
    const errorComponent = handleErrors({error, data: res});
    if (errorComponent) return errorComponent;

    return (
      <div className="flex flex-col justify-center py-24 sm:pt-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          View characters
        </h1>
        <p className="text-muted-foreground max-w-[42rem] pb-12 leading-normal sm:text-xl sm:leading-8">
          Select from the list below or search the Star Wars character you would
          like to view.
        </p>
        <Table data={res.allPeople.people} />
      </div>
    );
  } catch (error) {
    return handleErrors({error, data: null});
  }
}
