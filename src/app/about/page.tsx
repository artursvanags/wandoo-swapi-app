import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About this project",
  description: "Description about this project.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center py-24 sm:pt-32">
      <h1 className="border-b pb-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        About this project
      </h1>
      <div className="mt-6 space-y-8 leading-7 text-muted-foreground">
        <p>
          The Star Wars Character Encyclopedia is a mobile-first web application
          that allows users to explore detailed information about characters
          from the Star Wars universe. With an intuitive user interface built
          using React and Next.js, users can easily navigate through a list of
          Star Wars characters and access comprehensive details about each
          character.
        </p>
        <p>
          The application integrates with the SWAPI GraphQL API to fetch data
          such as name, birth year, species, homeworld, and films. The
          mobile-first design approach ensures optimal display on smaller
          screens, while responsive classes from Tailwind CSS adapt the layout
          for larger screens. Users can search for characters by name and use a
          filter option to sort characters alphabetically.
        </p>
        <p>
          The application also provides additional details on species and
          homeworlds, including the name of the species and the name and details
          of the homeworld. With clean and maintainable code that utilizes
          functional components and hooks, this project demonstrates proficiency
          in Next.js, React, GraphQL, Apollo Client, and Tailwind CSS.
        </p>
        <p>
          The project's GitHub repository contains a clear README file with
          instructions on how to run the application locally, and the code is
          organized and structured for easy maintenance. Overall, the Star Wars
          Character Encyclopedia is a comprehensive and user-friendly web
          application that combines the exciting world of Star Wars with modern
          web development technologies.
        </p>
        <p>
          The author of this project is{" "}
          <span className="font-bold">{siteConfig.developer}</span> and the
          repository is available on{" "}
          <Link
            className=" font-bold underline underline-offset-4"
            href={siteConfig.links.github}
          >
            Github.
          </Link>
        </p>
      </div>
    </div>
  );
}
