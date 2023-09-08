import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  data: Array<{ id: string; name: string }>;
}

export default function Card({ title, data }:CardProps) {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      {sortedData.map((entry) => (
        <Link key={entry.id} className='border p-2 m-1' href={`/characters/${entry.id}`}>
          {entry.name}
        </Link>
      ))}
    </div>
  );
};
