import { gql } from "@apollo/client";

// Fragments
export const PERSON_DETAILS = gql`
fragment PersonDetails on Person {
  id
  name
  created
  edited
  birthYear
  eyeColor
  gender
  hairColor
  height
  mass
  skinColor
}
`;

export const HOMEWORLD_DETAILS = gql`
fragment HomeworldDetails on Planet {
  id
  name
  created
  edited
  climates
  diameter
  gravity
  orbitalPeriod
  population
  rotationPeriod
  surfaceWater
  terrains
}
`;

export const FILM_DETAILS = gql`
fragment FilmDetails on Film {
  id
  title
  created
  edited
  director
  producers
  releaseDate
  episodeID
  openingCrawl
  producers
}
`;

// Main queries
export const GET_PERSON = gql`
query Person($personId: ID) {
  person(id: $personId) {
    ...PersonDetails
    homeworld {
      ...HomeworldDetails
    }
    filmConnection {
      edges {
        cursor
        node {
          ...FilmDetails
        }
      }
    }
  }
}
${PERSON_DETAILS}
${HOMEWORLD_DETAILS}
${FILM_DETAILS}
`;

export const GET_PEOPLE = gql`
query GetPeople {
  allPeople {
    people {
      id
      name
    }
  }
}
`;