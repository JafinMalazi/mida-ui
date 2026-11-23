"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
};

const mainMenu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transaksi", href: "/transaksi" },
  { label: "Peralatan", href: "/peralatan" },
  { label: "Biaya dan Laba", href: "/biaya-laba" },
  { label: "Rekonsiliasi", href: "/rekonsiliasi" },
  { label: "Standar Pemakaian", href: "/std-pemakaian" },
];

const preferences = [
  { label: "Settings", href: "/settings" },
  { label: "Helps", href: "/helps" },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const renderLinks = (items: { label: string; href: string }[]) => (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-900 hover:bg-neutral-300"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      id="sidebar"
      aria-label="Menu samping"
      className={`fixed bottom-0 left-0 top-14 z-40 flex w-60 flex-col justify-between overflow-y-auto bg-neutral-200 p-4 transition-[transform,visibility] duration-300 ${
        isOpen ? "visible translate-x-0" : "invisible -translate-x-full"
      }`}
    >
      <nav aria-label="Menu utama">
        <p className="mb-2 px-3 text-sm font-bold text-neutral-900">Main Menu</p>
        {renderLinks(mainMenu)}
      </nav>

      <nav aria-label="Preferensi">
        <p className="mb-2 px-3 text-sm font-bold text-neutral-900">Preferences</p>
        {renderLinks(preferences)}
      </nav>
    </aside>
  );
}