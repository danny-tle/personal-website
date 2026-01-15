// app/about/layout.tsx
import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// optional metadata stays fine
export const metadata = {
  title: "About — Danny Le",
  description: "About section of Danny Le's portfolio",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  // Keep this minimal — do NOT include <html> or <body> or import globals.css here.
  // The root layout already centers the content. Use this wrapper only for local styling.
  return (
    <div className={`${radio.className} w-full`}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
