export interface Details {
    id: string;
    name: string;
    created: string;
    edited: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: string;
    mass: string;
    skinColor: string;
    species: {
        averageHeight: string;
        averageLifespan: string;
        classification: string;
        created: string;
        designation: string;
        edited: string;
        eyeColors: string;
        hairColors: string;
        id: string;
        language: string;
        name: string;
        skinColors: string;
    }
    homeworld: {
        id: string;
        name: string;
        created: string;
        edited: string;
        climates: string;
        diameter: string;
        gravity: string;
        orbitalPeriod: string;
        population: string;
        rotationPeriod: string;
        surfaceWater: string;
        terrains: string;
    };
    filmConnection: {
        edges: {
            cursor: string;
            node: {
                id: string;
                title: string;
                created: string;
                edited: string;
                director: string;
                producers: string;
                releaseDate: string;
                episodeID: string;
                openingCrawl: string;
            };
        }[];
    };
    vehicleConnection: {
        vehicles: {
            cargoCapacity: string;
            consumables: string;
            costInCredits: string;
            created: string;
            crew: string;
            edited: string;
            id: string;
            length: string;
            manufacturers: string;
            maxAtmospheringSpeed: string;
            model: string;
            name: string;
            passengers: string;
            vehicleClass: string;
        }[];
    };
}