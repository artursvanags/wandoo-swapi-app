import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertIcons } from "@/config/icons";

type HandleErrorsProps = {
    error: any;
    res: any;
    params?: {
      slug: string;
    };
  };
  
  export function handleErrors({ error, res, params }: HandleErrorsProps) {
    const hasData = res && (res.person || (res.allPeople && res.allPeople.people.length > 0));
  
    if (error || !hasData) {
      const errorMessage = error ? error.message : "No Data Available";
      return (
        <div className="mt-8">
          <Alert variant={error ? "destructive" : "default"}>
            <AlertIcons.Error className="h-4 w-4" />
            <AlertTitle>{error ? "Error" : "Info"}</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </div>
      );
    }
  
    if (params && res.person && params.slug !== encodeURIComponent(res.person.id)) {
      return (
        <div className="mt-8">
          <Alert variant="destructive">
            <AlertIcons.Info className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Slug does not match person ID</AlertDescription>
          </Alert>
        </div>
      );
    }
  
    return null;
  }