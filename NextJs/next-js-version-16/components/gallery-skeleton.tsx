import { Skeleton } from "@/components/ui/skeleton";

interface GallerySkeletonProps {
  itemCount?: number;
}

export const GallerySkeleton = ({ itemCount = 6 }: GallerySkeletonProps) => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="flex flex-col gap-2 md:gap-4">
            <Skeleton className="h-10 w-48 md:h-12 md:w-56" />
            <Skeleton className="h-4 w-64 md:h-5 md:w-80" />
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Skeleton className="size-10" />
            <Skeleton className="size-10" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-full">
        <div className="relative w-full max-w-full md:left-4">
          <div className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            <div className="flex gap-8 overflow-hidden">
              {Array.from({ length: itemCount }).map((_, index) => (
                <div key={index} className="ml-8 shrink-0 md:max-w-[452px]">
                  <div className="group flex flex-col justify-between">
                    <div>
                      <div className="aspect-3/2 flex overflow-clip rounded-xl">
                        <div className="flex-1">
                          <Skeleton className="size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 pt-4 md:mb-3 md:pt-4 lg:pt-4">
                      <Skeleton className="h-6 w-96 md:h-7 lg:h-8" />
                      <Skeleton className="mt-2 h-6 w-3/4 md:h-7 lg:h-8" />
                      <Skeleton className="mt-2 h-6 w-1/2 md:h-7 lg:h-8" />
                    </div>
                    <div className="mb-8 md:mb-12 lg:mb-9">
                      <Skeleton className="h-4 w-96 md:h-5" />
                      <Skeleton className="mt-1 h-4 w-5/6 md:h-5" />
                    </div>
                    <div className="flex items-center">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="ml-2 size-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};