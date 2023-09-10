import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col py-24 sm:pt-32">
      <Skeleton className="h-14 sm:w-[540px] w-[80vw] mb-2" />
      <Skeleton className="h-8 sm:w-[680px] w-[60vw] mb-6" />
      <Skeleton className="h-64 w-full my-2" />
    </div>
  );
}
