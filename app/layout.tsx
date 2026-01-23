import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import PageReveal from "@/components/PageReveal";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Danny's Portfolio",
  description: "Danny's Personal Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${radio.className} min-h-screen bg-white`}>
        <main className="mx-auto max-w-2xl px-6 py-16">
          <PageReveal>{children}</PageReveal>
        </main>
      </body>
    </html>
  );
}
