import { getClient } from "@/lib/client";
import { GET_PERSON, GET_PEOPLE } from "@/config/graphql";

export async function getPersonData(slug: string) {
  const client = getClient();
  const id = decodeURIComponent(slug);

  try {
    const {
      data: res,
      loading,
      error,
    } = await client.query({
      query: GET_PERSON,
      errorPolicy: "all",
      variables: { personId: id },
    });

    return { res, loading, error };
  } catch (error) {
    return { error };
  }
}

export async function getPeopleData() {
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