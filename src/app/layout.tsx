import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Book Collector",
  description: 'Manage your personal book collection',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
