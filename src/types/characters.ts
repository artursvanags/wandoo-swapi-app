export interface Details {
    id: string;
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: number;
    mass: number;
    skinColor: string;
    created: string;
    edited: string;
    species: {
        name: string;
        classification: string;
        designation: string;
        averageHeight: number;
        averageLifespan: number;
        eyeColors: string[];
        hairColors: string[];
        skinColors: string[];
        language: string;
        created: string;
        edited: string;
        id: string;
    };
    homeworld: {
        id: string;
        name: string;
        diameter: number;
        rotationPeriod: number;
        orbitalPeriod: number;
        gravity: string;
        population: number;
        climates: string[];
        terrains: string[];
        surfaceWater: number;
        created: string;
        edited: string;
    };
    filmConnection: {
        films: {
            id: string;
            title: string;
            episodeID: number;
            openingCrawl: string;
            director: string;
            producers: string[];
            releaseDate: string;
            created: string;
            edited: string;
        }[];
    };
    vehicleConnection: {
        vehicles: {
            id: string;
            name: string;
            model: string;
            vehicleClass: string;
            manufacturers: string[];
            costInCredits: number;
            length: number;
            crew: string;
            passengers: string;
            maxAtmospheringSpeed: number;
            cargoCapacity: number;
            consumables: string;
            created: string;
            edited: string;
        }[];
    };
}