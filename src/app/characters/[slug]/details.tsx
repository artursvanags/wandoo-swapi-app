"use client";

import { Icons } from "@/config/icons";
import { Cap } from "@/lib/utils";
import { Details } from "@/types/characters";
import InfoDialog from "@/components/characters/dialog";

interface DetailsPage {
  person: Details;
}

export default function PageDetails(i: DetailsPage) {
  return (
    <div>
      {i && (
        <>
          <div className="flex flex-col justify-center py-24 sm:pt-32">
            <h1 className="font-heading border-b text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {i.person.name}
            </h1>

            <div className="flex flex-wrap gap-4 pb-8 pt-2">
              <p className="text-muted-foreground flex items-center sm:text-xl">
                <Icons.Ghost className="mr-1 h-4 w-4" />
                {Cap(i.person.gender)}
              </p>
              <p className="text-muted-foreground flex items-center sm:text-xl">
                <Icons.Cake className="mr-1 h-4 w-4" />
                {i.person.birthYear !== "unknown"
                  ? "Born in " + i.person.birthYear
                  : "Unknown birth year"}
              </p>
              {i.person.homeworld && i.person.homeworld.name !== "unknown" && (
                <InfoDialog
                  title={i.person.homeworld.name}
                  content={Object.entries(i.person.homeworld)
                    .filter(
                      ([key]) =>
                        key !== "created" &&
                        key !== "edited" &&
                        key !== "__typename" &&
                        key !== "id",
                    )
                    .map(([key, value]) => (
                      <p key={key}>{`${key}: ${value}`}</p>
                    ))}
                >
                  <p className="text-muted-foreground flex items-center underline underline-offset-4 sm:text-xl">
                    <Icons.Globe className="mr-1 h-4 w-4" />
                    {Cap(i.person.homeworld.name)}
                  </p>
                </InfoDialog>
              )}
              {i.person.species && i.person.species.name !== "unknown" && (
                <InfoDialog
                  title={i.person.species.name}
                  content={Object.entries(i.person.species)
                    .filter(
                      ([key]) =>
                        key !== "created" &&
                        key !== "edited" &&
                        key !== "__typename" &&
                        key !== "id",
                    )
                    .map(([key, value]) => (
                      <p key={key}>{`${key}: ${value}`}</p>
                    ))}
                >
                  <p className="text-muted-foreground flex items-center underline underline-offset-4 sm:text-xl">
                    <Icons.Dog className="mr-1 h-4 w-4" />
                    {Cap(i.person.species.name)}
                  </p>
                </InfoDialog>
              )}
            </div>

            <div className="rounded border p-4">
              <h2 className="font-heading mb-2 flex items-center border-b pb-2 text-xl sm:text-xl">
                <Icons.Info className="mr-2 h-4 w-4" />
                Main description
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-1">
                <p className="p-2">
                  - Eyes:{" "}
                  {i.person.eyeColor ? Cap(i.person.eyeColor) : "Not specified"}
                </p>
                <p className="p-2">
                  - Hair:{" "}
                  {i.person.hairColor !== "none"
                    ? Cap(i.person.hairColor)
                    : "No hair"}
                </p>
                <p className="p-2">- Height: {i.person.height} cm</p>
                <p className="p-2">- Weight: {i.person.mass} kg</p>
                <p className="p-2">- Skin color: {Cap(i.person.skinColor)}</p>
              </div>
            </div>
          </div>
          <div className=" space-y-10 pb-12">
            {i.person.filmConnection.films && (
              <div>
                <h2 className="font-heading pb-2 text-2xl sm:text-4xl">
                  Film appearances
                </h2>
                <ul>
                  {i.person.filmConnection.films.map((films, index) => (
                    <li key={index}>
                      <InfoDialog
                        title={films.title}
                        content={Object.entries(films)
                          .filter(
                            ([key]) =>
                              key !== "created" &&
                              key !== "edited" &&
                              key !== "__typename" &&
                              key !== "id",
                          )
                          .map(([key, value]) => (
                            <p key={key}>{`${key}: ${value}`}</p>
                          ))}
                      >
                        <p className="text-muted-foreground flex items-center py-2 underline underline-offset-4 sm:text-xl">
                          - {films.title}
                        </p>
                      </InfoDialog>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {i.person.vehicleConnection.vehicles &&
              i.person.vehicleConnection.vehicles.length > 0 && (
                <div>
                  <h2 className="font-heading pb-2 text-2xl sm:text-4xl">
                    Vehicles
                  </h2>
                  <ul>
                    {i.person.vehicleConnection.vehicles.map(
                      (vehicle, index) => (
                        <li key={index}>
                          <InfoDialog
                            title={vehicle.name}
                            content={Object.entries(vehicle)
                              .filter(
                                ([key]) =>
                                  key !== "created" &&
                                  key !== "edited" &&
                                  key !== "__typename" &&
                                  key !== "id",
                              )
                              .map(([key, value]) => (
                                <p key={key}>{`${key}: ${value}`}</p>
                              ))}
                          >
                            <p className="text-muted-foreground flex items-center underline underline-offset-4 sm:text-xl">
                              - {vehicle.name}
                            </p>
                          </InfoDialog>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
          </div>
        </>
      )}
    </div>
  );
}
