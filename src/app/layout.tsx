"use client"; // Must be a client component

 // for App Router
import { Roboto } from "next/font/google";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import ReactQueryProvider from "../components/shared/ReactQueryProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          <main className="max-w-7xl mx-auto py-20">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
