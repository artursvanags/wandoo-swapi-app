import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  interface TableProps {
    title: string;
    data: Array<{id: string, name: string}>;
  }
  
  export default function CharacterTable({ title, data }: TableProps) {
    return (
      <Table>
        <TableCaption>{title}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
