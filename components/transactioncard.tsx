"use client";

import Button from "./button";

type TransactionCardProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TransactionCard({
  isOpen,
  onClose,
}: TransactionCardProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-neutral-900">
          Tambah Transaksi
        </h2>

        <div className="mt-5 flex justify-end">
          <Button
            label="Batal"
            variant="secondary"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}