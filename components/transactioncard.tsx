"use client";

import Button from "./button";

const labelStyle = "mb-1 block text-sm font-medium text-neutral-900";
const inputStyle =
  "w-full rounded-md border border-neutral-500 bg-white p-2 text-sm text-neutral-900 placeholder:text-neutral-600";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="judul-transaksi"
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-4 shadow-xl sm:p-6"
      >
        <h2 id="judul-transaksi" className="text-xl font-bold text-neutral-900">
          Tambah Transaksi
        </h2>

        <form
          className="mt-5 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="jenis" className={labelStyle}>
              Jenis Transaksi
            </label>
            <select id="jenis" className={inputStyle}>
              <option>Pendapatan</option>
              <option>Pengeluaran</option>
            </select>
          </div>

          <div>
            <label htmlFor="nama" className={labelStyle}>
              Nama Transaksi
            </label>
            <input
              id="nama"
              type="text"
              placeholder="Masukkan nama transaksi"
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="nominal" className={labelStyle}>
              Nominal
            </label>
            <input
              id="nominal"
              type="number"
              placeholder="Rp 0"
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="tanggal" className={labelStyle}>
                Tanggal
              </label>
              <input id="tanggal" type="date" className={inputStyle} />
            </div>

            <div>
              <label htmlFor="metode" className={labelStyle}>
                Metode Pembayaran
              </label>
              <select id="metode" className={inputStyle}>
                <option>Tunai</option>
                <option>QRIS</option>
                <option>Transfer Bank</option>
                <option>E-Wallet</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="catatan" className={labelStyle}>
              Catatan
            </label>
            <textarea
              id="catatan"
              rows={2}
              placeholder="Catatan tambahan (opsional)"
              className={inputStyle}
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button label="Batal" variant="secondary" onClick={onClose} />
            <Button label="Simpan Transaksi" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
