import { Button } from "@/components/ui/button"
import { Icons } from "@/config/icons"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
<div className="container px-6 flex flex-col justify-center items-center py-24 sm:pt-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          404 Not Found
        </h1>
        <p className="max-w-[42rem] pb-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          The page does not exist or is not found.
        </p>
        <div>
          <Button asChild variant="default">
            <Link href="/characters">
              <Icons.Left className="mr-2 w-4 h-4"/>Go back
            </Link>
          </Button>
        </div>
      </div>
  )
}