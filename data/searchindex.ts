export type SearchEntry = {
  title: string; // isi <h1> halaman, sama dengan teks link di sidebar
  href: string;
  headings: string[]; // isi <h2> di halaman tersebut
};

// Tambahkan entri baru setiap kali membuat halaman atau <h2> baru
export const searchIndex: SearchEntry[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    headings: [],
  },
  {
    title: "Transaksi",
    href: "/transaksi",
    headings: [],
  },
  {
    title: "Biaya dan Laba",
    href: "/biaya-laba",
    headings: [],
  },
];
