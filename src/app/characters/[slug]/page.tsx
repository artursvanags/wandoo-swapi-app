import { GET_PERSON } from "@/config/graphql";
import { getClient } from "@/lib/client";
import PageDetails from "./details";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertIcons } from "@/config/icons";

async function getPersonData(slug: string) {
  const client = getClient();
  const id = decodeURIComponent(slug);
  
  try {
    const { data: res, loading, error } = await client.query({
      query: GET_PERSON,
      errorPolicy: "all",
      variables: { personId: id },
    });

    return { res, loading, error };
  } catch (error) {
    return { error };
  }
}

type handleErrorsProp = {
  error: any,
  res: any,
  params: {
    slug: string
  }
}

function handleErrors({error, res, params}:handleErrorsProp) {
  if (error || !res || res.status === 404) {
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

  if (params.slug !== encodeURIComponent(res.person.id)) {
    return (
      <div className="mt-8">
        <Alert variant='destructive'>
          <AlertIcons.Info className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Slug does not match person ID</AlertDescription>
        </Alert>
      </div>
    );
  }

  return null;
}

export async function generateMetadata({params}: {params: { slug: string }}) {
  const { res, error } = await getPersonData(params.slug);
  const errorComponent = handleErrors({error, res, params});

  if (errorComponent) return { title: "Error", description: "Error while generating metadata." };

  return {
    title: res.person.name,
    description: `Details about ${res.person.name}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const { res, error } = await getPersonData(params.slug);

    const errorComponent = handleErrors({error, res, params});
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