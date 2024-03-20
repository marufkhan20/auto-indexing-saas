import { cn } from "@/lib/utills";

const Loading = ({ type, className }) => {
  return type === "secondary" ? (
    <div className="flex items-center justify-center w-full my-5">
      <img
        className={cn("w-16 h-16 z-50", className)}
        src="/images/loading-secondary.gif"
        alt="loading"
      />
    </div>
  ) : (
    <div className="flex items-center justify-center w-full">
      <img
        className={cn("w-8 h-8 z-50", className)}
        src="/images/loading.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loading;
