"use client";

import React, { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Cap, cn } from "@/lib/utils";
import { Icons, TableIcons } from "@/config/icons";
import { Button } from "@/components/ui/button";

interface TableProps {
  data: Array<{ id: string; name: string; gender: string }>;
}

export default function Table({ data }: TableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    if (sortOrder === "desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const filteredData = sortedData.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      const newSearchParams = new URLSearchParams(searchParams);
      if (e.target.value === "") {
        newSearchParams.delete("name");
      } else {
        newSearchParams.set("name", e.target.value);
      }
      router.push(`?${newSearchParams.toString()}`);
    },
    [searchParams, router],
  );

  return (
    <div className="space-y-2">
      <Input
        type="search"
        placeholder="Search by character name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>
              <Button
                variant="secondary"
                className={cn(
                  " w-full justify-start rounded-none border font-bold",
                )}
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              >
                {sortOrder === "asc" ? (
                  <TableIcons.Asc className="mr-2 h-4 w-4" />
                ) : sortOrder === "desc" ? (
                  <TableIcons.Desc className="mr-2 h-4 w-4" />
                ) : (
                  <TableIcons.Default className="mr-2 h-4 w-4" />
                )}
                Name
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <Link
                    className="flex flex-1 justify-between border px-4 py-2"
                    href={`/characters/${encodeURIComponent(entry.id)}`}
                  >
                    {entry.name}{" "}
                    <p className="flex items-center text-muted-foreground">
                      {Cap(entry.gender)}
                      <Icons.Ghost className="ml-1 h-4 w-4" />
                    </p>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No characters found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
