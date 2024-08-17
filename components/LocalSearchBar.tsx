import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const LocalSearchBar = () => {
  return (
    <div className="w-full flex gap-2 items-center relative flex-1">
      <div className="bg-zinc-200/40 dark:bg-zinc-800 flex min-h-[44px] grow rounded-md gap-1 px-4 items-center relative">
        <Search className="h-6 w-6 text-muted-foreground"></Search>
        <Input type="text" placeholder="Search questions..." className="h-full bg-zinc-200/10 dark:bg-zinc-800 paragraph-regular no-foucs outline-none placeholder text-black dark:text-white border-none shadow-none" />
      </div>
    </div>
  );
};

export default LocalSearchBar;
