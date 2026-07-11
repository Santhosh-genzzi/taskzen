import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Provider from "@/components/HOC/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Project Management System",
  description: "Project Management System in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={poppins.className}
    >
      <body className="min-h-screen">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}