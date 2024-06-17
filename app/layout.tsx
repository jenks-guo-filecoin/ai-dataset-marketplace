"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {config} from "@/utils/wagmi-config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import NavBar from "@/app/components/navbar/page";
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "AI Dataset Market",
  description: "A Filecoin demo app for buying and selling datasets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <main className="flex bg-white text-black h-screen w-screen">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <NavBar />
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </main>
      </body>
    </html>
  );
}
