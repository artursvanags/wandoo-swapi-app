import { Icons } from "@/config/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-25vh)] flex-col justify-center">
      <div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name} {siteConfig.version}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl">
          Made by {siteConfig.developer}
        </p>
        <p className="text-muted-foreground max-w-[42rem] py-4 leading-normal sm:text-xl sm:leading-8">
          A comprehensive database that provides detailed information about the
          vast array of characters found in the Star Wars universe.
        </p>
        <div className="flex flex-1 items-center space-x-2">
          <Button asChild variant="default">
            <Link href="/characters">
              <Icons.Library className="mr-2" /> View Library{" "}
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
