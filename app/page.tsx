import Link from "next/link";
import NavBar from "@/app/components/navbar/page";
import Sell from "@/app/market/sell/page";
import Buy from "@/app/market/buy/page";

export default function Home() {
  return (
    <main className="flex bg-white">
      <NavBar />
    </main>
  );
}
