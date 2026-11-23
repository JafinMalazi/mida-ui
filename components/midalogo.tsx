"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./searchbar";
import { searchIndex } from "@/data/searchindex";

type HeaderProps = {
  isMenuOpen?: boolean;
  onMenuClick?: () => void;
};

type SearchResult = {
  label: string;
  description: string;
  href: string;
};

function getResults(query: string): SearchResult[] {
  if (!query) return [];

  const results: SearchResult[] = [];

  searchIndex.forEach((entry) => {
    if (entry.title.toLowerCase().includes(query)) {
      results.push({
        label: entry.title,
        description: "Halaman",
        href: entry.href,
      });
    }

    entry.headings.forEach((heading) => {
      if (heading.toLowerCase().includes(query)) {
        results.push({
          label: heading,
          description: `Bagian di ${entry.title}`,
          href: entry.href,
        });
      }
    });
  });

  return results;
}

export default function Header({ isMenuOpen = false, onMenuClick }: HeaderProps) {
  const [query, setQuery] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const results = getResults(query);

  const handleSelect = () => {
    setQuery("");
    setResetKey((k) => k + 1);
  };

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-neutral-300 bg-neutral-100">
      <div className="flex h-full items-center gap-3 px-4">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="sidebar"
            className="rounded-md p-2 text-neutral-900 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-neutral-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        <Link
          href="/dashboard"
          className="text-xl font-bold tracking-tight text-neutral-900"
        >
          MIDA
        </Link>

        <div className="relative ml-auto w-full max-w-xs sm:max-w-sm">
          <SearchBar key={resetKey} onSearchChange={setQuery} />

          <p role="status" className="sr-only">
            {query ? `${results.length} hasil ditemukan` : ""}
          </p>

          {query && (
            <div className="absolute left-0 right-0 top-full mt-1 max-h-72 overflow-y-auto rounded-md border border-neutral-300 bg-white shadow-lg">
              {results.length > 0 ? (
                <ul>
                  {results.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        onClick={handleSelect}
                        className="block px-3 py-2 hover:bg-neutral-100"
                      >
                        <span className="block text-sm font-medium text-neutral-900">
                          {item.label}
                        </span>
                        <span className="block text-xs text-neutral-700">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-3 text-sm text-neutral-700">
                  Tidak ada hasil yang cocok.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}