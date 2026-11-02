import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-neutral-100">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-3">
        <Link
          href="/dashboard"
          className="text-xl font-bold tracking-tight text-neutral-900"
        >
          MIDA
        </Link>
      </div>
    </header>
  );
}