import { GET_PERSON } from "@/config/graphql";
import { getClient } from "@/lib/client";
import PageDetails from "./details";

async function getPersonData(slug: string) {
  const client = getClient();
  const encodeId = decodeURIComponent(slug);
  const { loading, data: res } = await client.query({
    query: GET_PERSON,
    variables: { personId: encodeId },
  });
  return { loading, res };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { res } = await getPersonData(params.slug);
  return {
    title: res.person.name,
    description: `Details about ${res.person.name}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { loading, res } = await getPersonData(params.slug);

    if (loading) return <p>Loading...</p>;

    if (decodeURIComponent(params.slug) !== res.person.id)
      return <div>Invalid character id.</div>;

    // Check if the response is not found or 404
    if (!res || res.status === 404) return <div>No data available</div>;

    return (
      <div className="flex flex-col justify-center">
        <PageDetails {...res} />
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}
