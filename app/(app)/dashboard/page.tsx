"use client";

import { useState } from "react";
import Button from "@/components/button";
import TransactionCard from "@/components/transactioncard";

const summary = [
  { id: 1, label: "Saldo Usaha", value: "Rp 2.750.000" },
  { id: 2, label: "Pendapatan Layanan", value: "Rp 3.200.000" },
  { id: 3, label: "Pengeluaran", value: "Rp 750.000" },
  { id: 4, label: "Estimasi Laba Kotor", value: "Rp 2.100.000" },
];

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-5xl">
          Puspita Finance
        </h1>

        <p className="mt-1 text-lg text-neutral-700 sm:text-xl">
          Dashboard Keuangan
        </p>

        <h2 className="mt-8 font-semibold text-neutral-900">
          Selamat Datang, Puspita!
        </h2>

        <p className="text-sm text-neutral-700">
          Ringkasan keuangan usahamu bulan ini.
        </p>

        <section
          aria-label="Ringkasan keuangan"
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {summary.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-neutral-300 bg-white p-4"
            >
              <p className="text-sm text-neutral-700">{item.label}</p>

              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <div className="mt-8">
          <Button label="Tambah Transaksi" onClick={() => setIsOpen(true)} />
        </div>
      </main>

      <TransactionCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}