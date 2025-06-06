import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Searchbar = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("name") as string;
    if (searchQuery) {
        router.push(`/list?name=${searchQuery}`);
    }
  };
  return (
    <form
      className="hidden md:flex items-center justify-between w-full flex-1 bg-gray-100 p-2 rounded-md "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search products..."
        name="name"
        className="flex-1 border border-transparent outline-none "
      />
      <button type="submit" className="cursor-pointer">
        <Search className="text-gray-500" />
      </button>
    </form>
  );
};

export default Searchbar;
