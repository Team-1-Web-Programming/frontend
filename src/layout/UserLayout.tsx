'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function UserLayout(props: any) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100%" }}>{props?.children}</div>
      <Footer />
    </>
  );
}
