import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col py-24 sm:pt-32">
      <Skeleton className="mb-2 h-14 w-[80vw] sm:w-[540px]" />
      <Skeleton className="mb-6 h-8 w-[60vw] sm:w-[680px]" />
      <Skeleton className="my-2 h-64 w-full" />
    </div>
  );
}
