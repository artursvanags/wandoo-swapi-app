import { GET_PERSON } from "@/config/graphql";
import { getClient } from "@/lib/client";
import PageDetails from "./details";

export default async function Page({ params }: { params: { slug: string } }) {
  const client = getClient();

  try {
    const { loading, data: res } = await client.query({
      query: GET_PERSON,
      variables: { personId: params.slug },
    });

    if (loading) return <p>Loading...</p>;

    // Validate if the slug matches the personID
    if (res.person.id !== params.slug) return <div>No data available</div>;

    // Check if the response is not found or 404
    if (!res || res.status === 404) return <div>No data available</div>;

    return (
    <div className="mx-auto flex pt-[25vh] sm:pt-32 flex-col justify-center container">
      <PageDetails {...res}/>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}