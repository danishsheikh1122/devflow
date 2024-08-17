import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}
const RenderTag: React.FC<Props> = ({
  id,
  name,
  totalQuestions,
  showCount,
}) => {
  return (
    <Link href={`/tags/${id}`} className="gap-2 justify-between flex">
      <Badge className="rounded-md border-none px-4 py-2 uppercase bg-slate-200 text-black/50 dark:text-white/50 dark:bg-zinc-800 hover:bg-transparent dark:hover:bg-transparent font-medium ">
        {name}
      </Badge>
      {showCount &&(
        <p className="text-sm">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
