import { StringToBoolean } from "class-variance-authority/types";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import MetricCMP from "../MetricCMP";
import { getTimeStamp } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  tags: { id: string; name: string }[];
  upVotes: number;
  answers: Array<Object>;
  views: number;
  createdAt: Date;
  author: { id: string; name: string; picture: string };
}

const QuestionCard: React.FC<Props> = ({
  id,
  title,
  tags,
  upVotes,
  answers,
  views,
  createdAt,
  author,
}) => {
  const usersReviews = [
    {
      icon: <ThumbsUp className="h-4 w-4"></ThumbsUp>,
      number: upVotes,
      label: "votes",
    },
    {
      icon: <MessageCircle className="h-4 w-4"></MessageCircle>,
      number: answers.length,
      label: "Answers",
    },
    {
      icon: <Eye className="h-4 w-4"></Eye>,
      number: views,
      label: "Views",
    },
  ];

  return (
    <div className="p-9 sm:px-11 rounded-[10px] bg-slate-100/60  dark:bg-zinc-900">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
        <span className="line-clamp-1 flex sm:hidden text-muted-foreground text-sm">{` - asked ${getTimeStamp(
          createdAt
        )}`}</span>
        <Link href={`/questions/${id}`}>
          <h3 className="sm:h3-semibold sm:text-lg flex-1 line-clamp-1">
            {title}
          </h3>
        </Link>
      </div>
      {/* if signed in add edit and delete actions */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag.id} id={tag.id} name={tag.name}></RenderTag>
        ))}
      </div>
      <div className="flex flex-co justify-between flex-wrap gap-3 w-full mt-6 sm:flex-row">
        <div className="flex items-center justify-center gap-2">
          <Avatar className="h-8 w-8">
            <Link href={"https://github.com/shadcn.png"}>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Link>
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div className="line-clamp-1 flex items-center gap-2">
            {author.name}
            <div className="text-sm text-muted-foreground hidden lg:block md:block">
              {`- asked ${getTimeStamp(createdAt)}`}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm">
            {usersReviews.map((user) => (
              <MetricCMP
                number={user.number}
                icon={user.icon}
                label={user.label}
                key={user.label}
              ></MetricCMP>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
