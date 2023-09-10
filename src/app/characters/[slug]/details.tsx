'use client';

import { Icons } from "@/config/icons";
import { Cap } from "@/lib/utils";
import { Details } from "@/types/characters"
  
import InfoDialog from '@/components/characters/dialog';
interface DetailsPage {
    person: Details;
}


export default function PageDetails(i: DetailsPage){

    return (
        <div>
      {i && (
        <>
        <div className="h-[80vh] flex flex-col justify-center">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl border-b pb-2">{i.person.name}</h1>
                
                <div className="flex flex-wrap pt-2 pb-8 gap-6">
                    <p className="text-muted-foreground sm:text-xl flex items-center"><Icons.Ghost className="mr-1 w-4 h-4"/>{Cap(i.person.gender)}</p>
                    <p className="text-muted-foreground sm:text-xl flex items-center"><Icons.Cake className="mr-1 w-4 h-4"/>{i.person.birthYear !== "unknown" ? "Born in " + i.person.birthYear : "Unknown birth date"}</p>
                    {i.person.homeworld.name !== "unknown" && (
                        <InfoDialog title={i.person.homeworld.name} content={Object.entries(i.person.homeworld).filter(([key, value]) => key !== 'created' && key !== 'edited' && key !== '__typename' && key !== 'id').map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>)} >
                            <p className="text-muted-foreground sm:text-xl flex items-center underline"><Icons.Globe className="mr-1 w-4 h-4"/>{Cap(i.person.homeworld.name)}</p>
                        </InfoDialog>
                    )}
                </div>

                <div className="border p-4 rounded">
                    <h2 className="font-heading text-xl sm:text-xl pb-2 mb-2 flex items-center border-b"><Icons.Info className="mr-2 w-4 h-4"/>Description</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-1">
                        <p className="p-2">- Eyes: {i.person.eyeColor ? Cap(i.person.eyeColor) : "Not specified"}</p>
                        <p className="p-2">- Hair: {i.person.hairColor !== "none" ? Cap(i.person.hairColor) : "No hair"}</p>
                        <p className="p-2">- Height: {i.person.height} cm</p>
                        <p className="p-2">- Weight: {i.person.mass} kg</p>
                        <p className="p-2">- Skin color: {Cap(i.person.skinColor)}</p>
                    </div>
                </div> 
            </div>
            
            {i.person.filmConnection.edges && (
                <div className="">
                    <h2 className="font-heading text-2xl sm:text-4xl pb-2">Film appearances</h2>
                    <ul>
                        {i.person.filmConnection.edges.map((edge, index) => (
                            <li key={index}>- {edge.node.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
      )}
    </div>
    )
  }