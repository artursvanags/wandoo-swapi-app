import PageDetails from "./details";
import { handleErrors } from "@/lib/handleErrors";
import { getPersonData } from "@/lib/fetchData";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { res, error } = await getPersonData(params.slug);
  const errorComponent = handleErrors({ error, res, params });

  if (errorComponent)
    return { title: "Error", description: "Error while generating metadata." };

  return {
    title: res.person.name,
    description: `Details about ${res.person.name}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { res, error } = await getPersonData(params.slug);
    const errorComponent = handleErrors({ error, res, params });
    if (errorComponent) return errorComponent;
    return (
      <div className="flex flex-col justify-center">
        <PageDetails {...res} />
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}
