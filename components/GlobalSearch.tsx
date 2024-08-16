import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="w-full max-w-[600px] max-lg:hidden relative">
      <div className="bg-zinc-200/40 dark:bg-zinc-800 flex min-h-[56px] grow rounded-xl gap-1 px-4 items-center  relative">
        <Search className="text-muted-foreground h-6 w-6 cursor-pointer"></Search>
        <Input
          className="bg-zinc-200/10 dark:bg-zinc-800 paragraph-regular no-foucs outline-none placeholder text-black dark:text-white border-none shadow-none"
          type="text"
          placeholder="Search Globally"
          value=""
        />
      </div>
    </div>
  );
};
export default GlobalSearch;
