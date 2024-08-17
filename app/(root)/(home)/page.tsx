import FilterCmp from "@/components/FilterCmp";
import LocalSearchBar from "@/components/LocalSearchBar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import HomeFilters from "./_components/HomeFilters";
import NoResults from "@/components/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";

const filters = [
  { label: "Newest" },
  { label: "Recommended" },
  { label: "Frequent" },
  { label: "Unanswered" },
];
const questions = [
  {
    id: "1",
    title: "How to implement authentication in Next.js?",
    tags: [
      { id: "tag1", name: "Next.js" },
      { id: "tag2", name: "Authentication" },
    ],
    upVotes: 19999,
    answers: [
      {
        id: "answer1",
        content:
          "You can use NextAuth.js for easy authentication integration in Next.js.",
        author: {
          id: "user2",
          name: "John Doe",
          picture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        createdAt: new Date("2024-07-01T12:00:00.000Z"),
      },
    ],
    views: 1200,
    createdAt: new Date("2024-08-17T12:00:00.000Z"),
    author: {
      id: "user1",
      name: "Jane Smith",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    id: "2",
    title: "What is the best way to style components in React?",
    tags: [
      { id: "tag3", name: "React" },
      { id: "tag4", name: "CSS" },
    ],
    upVotes: 68,
    answers: [
      {
        id: "answer2",
        content:
          "You can use Tailwind CSS for utility-first styling or styled-components for a CSS-in-JS approach.",
        author: {
          id: "user3",
          name: "Alice Johnson",
          picture: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        createdAt: new Date("2021-09-01T12:00:00.000Z"),
      },
    ],
    views: 1800,
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
    author: {
      id: "user4",
      name: "Bob Brown",
      picture: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
  {
    id: "2",
    title: "What is the best way to style components in React?",
    tags: [
      { id: "tag3", name: "React" },
      { id: "tag4", name: "CSS" },
    ],
    upVotes: 68,
    answers: [
      {
        id: "answer2",
        content:
          "You can use Tailwind CSS for utility-first styling or styled-components for a CSS-in-JS approach.",
        author: {
          id: "user3",
          name: "Alice Johnson",
          picture: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        createdAt: new Date("2021-09-01T12:00:00.000Z"),
      },
    ],
    views: 1800,
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
    author: {
      id: "user4",
      name: "Bob Brown",
      picture: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold font-bold text-3xl ">All Questions</h1>
        <Link href={`/ask-question`} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient px-4 py-3 ! text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar></LocalSearchBar>
        <FilterCmp
          filters={HomePageFilters}
          otherClasses="min-h-[44px] sm:min-w-[170px] flex items-center"
          containerClasses="hidden max-md:flex"
        ></FilterCmp>
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col w-full gap-6 ">
        {questions.length != 0 ? (
          questions.map((que) => (
            <QuestionCard
              key={que.id}
              id={que.id}
              title={que.title}
              upVotes={que.upVotes}
              answers={que.answers}
              createdAt={que.createdAt}
              author={que.author}
              views={que.views}
              tags={que.tags}
            ></QuestionCard>
          ))
        ) : (
          <NoResults
            link="/ask-question"
            linkTitle="Ask a Question"
          ></NoResults>
        )}
      </div>
    </>
  );
};

export default Home;
