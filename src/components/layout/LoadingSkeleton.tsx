import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "title";
  className?: string;
}

const LoadingSkeleton = ({ variant = "card", className }: LoadingSkeletonProps) => {
  if (variant === "title") {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="h-8 bg-muted rounded-md w-48 mb-4" />
        <div className="h-4 bg-muted rounded-md w-64" />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={cn("animate-pulse space-y-3", className)}>
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-4/6" />
      </div>
    );
  }

  // Card skeleton
  return (
    <div className={cn("animate-pulse p-6 rounded-lg border border-border bg-card/30", className)}>
      <div className="h-6 bg-muted rounded-md w-3/4 mb-4" />
      <div className="h-4 bg-muted rounded-md w-full mb-2" />
      <div className="h-4 bg-muted rounded-md w-5/6 mb-6" />
      <div className="flex gap-2">
        <div className="h-6 bg-muted rounded-full w-16" />
        <div className="h-6 bg-muted rounded-full w-20" />
        <div className="h-6 bg-muted rounded-full w-14" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
