import { Metadata } from "next";
import Table from "@/components/characters/table";

import { getPeopleData } from "@/lib/fetchData";
import { handleErrors } from "@/lib/handleErrors";

export const metadata: Metadata = {
  title: "Characters",
  description: "A list of available Stars Wars Characters.",
};

export default async function CharacterPage() {
  try {
    const { res, error } = await getPeopleData();
    const errorComponent = handleErrors({ error, res });
    if (errorComponent) return errorComponent;

    return (
      <div className="flex flex-col justify-center py-24 sm:pt-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          View characters
        </h1>
        <p className="max-w-[42rem] pb-12 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Select from the list below or search the Star Wars character you would
          like to view.
        </p>
        <Table data={res.allPeople.people} />
      </div>
    );
  } catch (error) {
    return handleErrors({ error, res: null });
  }
}
