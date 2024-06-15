"use client";
import NavBar from "@/app/components/navbar/page";

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col  bg-white text-black">
      <NavBar />
      {children}
    </main>
  );
}