import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/HOC/AosProvider";

import Navbar from "@/components/navbar/Navbar";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/footer/Footer";

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
        <AosProvider>
        <Provider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
          <div className="flex-1 min-h-screen">
            {children}
          </div>
           <Footer/>
          </div>
          
        </Provider>
        </AosProvider>
      </body>
    </html>
  );
}