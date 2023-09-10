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

export const SPECIES_DETAILS = gql`
fragment SpeciesDetails on Species {
  averageHeight
  averageLifespan
  classification
  created
  designation
  edited
  eyeColors
  hairColors
  id
  language
  name
  skinColors
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

export const VEHICLE_DETAILS = gql`
fragment VehicleDetails on Vehicle {
  cargoCapacity
  consumables
  costInCredits
  created
  crew
  edited
  id
  length
  manufacturers
  maxAtmospheringSpeed
  model
  name
  passengers
  vehicleClass
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
    species {
      ...SpeciesDetails
    }
    filmConnection {
      edges {
        cursor
        node {
          ...FilmDetails
        }
      }
    }
    vehicleConnection {
      vehicles {
        ...VehicleDetails
      }
    }
  }
}
${PERSON_DETAILS}
${HOMEWORLD_DETAILS}
${FILM_DETAILS}
${SPECIES_DETAILS}
${VEHICLE_DETAILS}
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