'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input'

interface CardProps {
  data: Array<{ id: string; name: string }>;
}

export default function Card({ data }:CardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  const filteredData = sortedData.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='space-y-2'>
      <Input 
        type="search" 
        placeholder="Search by Character Name" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
        {filteredData.length > 0 ? filteredData.map((entry) => (
          <Link key={entry.id} className='border p-2' href={`/characters/${entry.id}`}>
            {entry.name}
          </Link>
        )) : <p>No characters found</p>}
      </div> 
    </div>
  );
};
