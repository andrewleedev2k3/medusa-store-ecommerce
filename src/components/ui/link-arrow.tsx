import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkArrowShape {
  text?: string;
  link: string;
}

const LinkArrow = ({ text, link }: LinkArrowShape) => {
  return (
    <Link className="flex items-center gap-1 group text-blue-600" href={link}>
      <span className="text-sm">{text || "View all"}</span>
      <ArrowUpRight
        size={15}
        className="group-hover:rotate-45 ease-in-out duration-200"
      />
    </Link>
  );
};

export default LinkArrow;
