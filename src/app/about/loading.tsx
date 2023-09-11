import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col py-24 sm:pt-32">
    <Skeleton className="mb-2 h-14 w-[80vw] sm:w-[540px]" />
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className="my-2 h-48 w-full" />
    ))}
  </div>
  );
}