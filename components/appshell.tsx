"use client";

import { useState, type ReactNode } from "react";
import Header from "./midalogo";
import Sidebar from "./sidebar";

export default function AppShell({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isSidebarOpen}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <Sidebar isOpen={isSidebarOpen} />

      {isSidebarOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-x-0 bottom-0 top-14 z-30 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`transition-[margin] duration-300 ${
          isSidebarOpen ? "md:ml-60" : "md:ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}