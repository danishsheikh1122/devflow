import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    id: 1,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    id: 2,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    id: 3,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    id: 4,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    id: 5,
    title: "How do I use express as a custom server in NextJS?",
  },
];

const popularTags = [
  { id: 1, name: "javascript", totalQuestions: 5 },
  { id: 2, name: "python", totalQuestions: 5 },
  { id: 3, name: "dsa", totalQuestions: 5 },
  { id: 4, name: "next-js", totalQuestions: 5 },
  { id: 5, name: "node-js", totalQuestions: 5 },
];

const RightSideBar = () => {
  return (
    <section className=" bg-zinc-200/30 dark:bg-zinc-900 border-l   background-light900-dark200 custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto  p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
      <div>
        <h3 className="h3-bold font-bold text-2xl ">Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((que) => (
            <Link
              href={`questions/${que.id}`}
              key={que.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-sm ">{que.title}</p>
              <ChevronRightIcon className="h-6 w-6 "></ChevronRightIcon>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12 space-y-2">
        {popularTags.map((tag) => (
          <RenderTag
            id={tag.id}
            name={tag.name}
            totalQuestions={tag.totalQuestions} 
            key={tag.id}
            showCount
          ></RenderTag>
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;
