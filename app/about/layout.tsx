import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "About — Danny Le",
  description: "About section of Danny Le's portfolio",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${radio.className} w-full`}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
