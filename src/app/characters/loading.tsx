import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col py-24 sm:pt-32">
      <Skeleton className="mb-2 h-14 w-[80vw] sm:w-[540px]" />
      <div className="mb-12 space-y-2">
        <Skeleton className="h-6 w-[85vw] sm:w-[680px]" />
        <Skeleton className="h-6 w-[55vw] sm:w-[680px]" />
      </div>
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="my-2 h-10 w-full" />
      ))}
    </div>
  );
}
