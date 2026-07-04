import "./globals.css";
import Navbar from "@/components/Navbar";
import { Albert_Sans } from "next/font/google";
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
