import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Layout from "@/layout/Layout";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guna Ulang",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  token,
}: Readonly<{
  children: React.ReactNode;
  token: string;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={montserrat.className}
        style={{ height: "100%", position: "relative" }}
      >
        <Layout token={token}>{children}</Layout>
        <ToastContainer />
      </body>
    </html>
  );
}
