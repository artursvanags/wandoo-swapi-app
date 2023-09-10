'use client';

import { Icons } from "@/config/icons";

interface Details {
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: string;
    mass: string;
    skinColor: string;
    homeworld: {
      name: string;
    };
    filmConnection: {
      edges: {
        node: {
          title: string;
        };
      }[];
    };
  }
  
  interface DetailsPage {
    person: Details;
  }


export default function PageDetails(i: DetailsPage){
    return (
      <div>
      {i && i.person && (
        <>
            <div    >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl border-b pb-2">{i.person.name}</h1>
                <div className="flex flex-1 pt-2 pb-8 gap-6">
                    <p className="text-muted-foreground sm:text-xl flex items-center"><Icons.Ghost className="mr-1 w-4 h-4"/>{Cap(i.person.gender)}</p>
                    <p className="text-muted-foreground sm:text-xl flex items-center"><Icons.Cake className="mr-1 w-4 h-4"/>{i.person.birthYear !== "unknown" ? "Born in " + i.person.birthYear : "Unknown birth date"}</p>
                    <p className="text-muted-foreground sm:text-xl flex items-center"><Icons.Globe className="mr-1 w-4 h-4"/>{i.person.homeworld.name !== "unknown" ? Cap(i.person.homeworld.name) : "Unknown homeworld"}</p>
                </div>
                <div className="border p-4 rounded">
                    <h2 className="font-heading text-xl sm:text-xl pb-2 flex items-center"><Icons.Info className="mr-2 w-4 h-4"/>Description</h2>
                    <div className="grid grid-cols-2 gap-1">
                        <p className="p-2">Eyes: {i.person.eyeColor ? Cap(i.person.eyeColor) : "Not specified"}</p>
                        <p className="p-2">Hair: {i.person.hairColor !== "none" ? Cap(i.person.hairColor) : "No hair"}</p>
                        <p className="p-2">Height: {i.person.height} cm</p>
                        <p className="p-2">Weight: {i.person.mass} kg</p>
                        <p className="p-2">Skin color: {i.person.skinColor}</p>
                    </div>
                </div> 
            </div>

            <div>
            <h2 className="font-heading text-xl sm:text-xl pb-2 flex items-center"><Icons.Info className="mr-2 w-4 h-4"/>Appearances in movies</h2>
            </div>
          <h3>Films:</h3>
          <ul>
            {i.person.filmConnection.edges.map((edge, index) => (
              <li key={index}>{edge.node.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
    )
  }