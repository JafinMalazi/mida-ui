"use client";

import { useState, type ChangeEvent } from "react";

type SearchBarProps = {
  onSearchChange: (normalizedQuery: string) => void;
  id?: string;
  label?: string;
  placeholder?: string;
};

export default function SearchBar({
  onSearchChange,
  id = "site-search",
  label = "Cari halaman atau bagian",
  placeholder = "Cari halaman...",
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setSearchTerm(rawValue);

    const normalizedQuery = rawValue.trim().toLowerCase();
    onSearchChange(normalizedQuery);
  };

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        autoComplete="off"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-500 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-600"
      />
    </form>
  );
}
