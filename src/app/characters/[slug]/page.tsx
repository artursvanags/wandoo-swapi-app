import { GET_PERSON } from "@/config/graphql";
import { getClient } from "@/lib/client";
import PageDetails from "./details";
import { Metadata } from "next";


async function getPersonData(slug: string) {
  const client = getClient();
  const { loading, data: res } = await client.query({
    query: GET_PERSON,
    variables: { personId: slug },
  });
  return { loading, res };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { res } = await getPersonData(params.slug);
  return {
    title: res.person.name,
    description: `Details about ${res.person.name}`,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { loading, res } = await getPersonData(params.slug);

    if (loading) return <p>Loading...</p>;

    // Validate if the slug matches the personID
    if (res.person.id !== params.slug) return <div>No data available</div>;

    // Check if the response is not found or 404
    if (!res || res.status === 404) return <div>No data available</div>;

    return (
    <div className="mx-auto flex flex-col justify-center container">  
      <PageDetails {...res}/>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}
