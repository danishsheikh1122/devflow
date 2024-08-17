import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  link: string;
  linkTitle: string;
}

const NoResults: React.FC<Props> = ({ link, linkTitle }) => {
  return (
    <div className="mt-8 gap-2 w-full flex flex-col items-center justify-center">
      <Image
        src={"/assets/images/light-illustration.png"}
        width={270}
        height={200}
        alt="error"
        className="block object-contain dark:hidden"
      ></Image>
      <Image
        src={"/assets/images/dark-illustration.png"}
        width={270}
        height={200}
        alt="error"
        className="object-contain hidden dark:block"
      ></Image>
      <h1 className="font-bold text-lg">Theres no question to show</h1>
      <p className="text-sm text-center w-1/2 text-muted-foreground">
        Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡
      </p>
      <Link href={link} className="flex justify-end max-sm:w-full mt-4">
        <Button className="primary-gradient px-8 py-3 ! text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResults;
