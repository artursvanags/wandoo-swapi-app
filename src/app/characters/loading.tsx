import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col py-24 sm:pt-32">
      <Skeleton className="h-14 sm:w-[540px] w-[80vw] mb-2" />
      <div className="space-y-2 mb-12">
        <Skeleton className="h-6 sm:w-[680px] w-[85vw]" />
        <Skeleton className="h-6 sm:w-[680px] w-[55vw]" />
      </div>
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-10 w-full my-2" />
      ))}
    </div>
  );
}
