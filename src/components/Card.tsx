import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  data: Array<{ id: string; name: string }>;
}

export default function Card({ title, data }:CardProps) {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
      {sortedData.map((entry) => (
        <Link key={entry.id} className='border p-2' href={`/characters/${entry.id}`}>
          {entry.name}
        </Link>
      ))}
    </div>
  );
};
