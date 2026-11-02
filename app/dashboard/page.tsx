"use client";

import { useState } from "react";
import Header from "../../components/midalogo";
import Button from "../../components/button";
import TransactionCard from "../../components/transactioncard";

const summary = [
  { id: 1, label: "Saldo Usaha", value: "Rp 2.750.000" },
  { id: 2, label: "Pendapatan Layanan", value: "Rp 3.200.000" },
  { id: 3, label: "Pengeluaran", value: "Rp 750.000" },
  { id: 4, label: "Estimasi Laba Kotor", value: "Rp 2.100.000" },
];

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-5xl font-bold text-neutral-900">
          Puspita Finance
        </h1>

        <p className="mt-1 text-xl text-neutral-500">
          Dashboard Keuangan
        </p>

        <h2 className="mt-8 font-semibold text-neutral-900">
          Selamat Datang, Puspita!
        </h2>

        <p className="text-sm text-neutral-500">
          Ringkasan keuangan usahamu bulan ini.
        </p>

        <section
          aria-label="Ringkasan keuangan"
          className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {summary.map((item) => (
            <div key={item.id}>
              <p className="text-xs text-neutral-500">
                {item.label}
              </p>

              <p className="text-lg font-semibold text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <div className="mt-8">
          <Button
            label="Tambah Transaksi"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </main>

      <TransactionCard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}