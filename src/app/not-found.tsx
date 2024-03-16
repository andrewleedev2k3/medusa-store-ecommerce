import LinkArrow from "@/components/ui/link-arrow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-3xl text-content-title font-bold">Page not found</h1>
      <p className="text-sm text-content-text">
        The page you tried to access does not exist.
      </p>
      <LinkArrow link="/" text="Go to home page" />
    </div>
  );
};
export default NotFound;
