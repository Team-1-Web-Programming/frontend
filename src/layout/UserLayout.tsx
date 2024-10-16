'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function UserLayout(props: any) {
 
  return (
    <>
      <Header type="user"/>
      <div style={{ minHeight: "100%", maxWidth: 'var(--max-width)', margin: 'auto' }}>{props?.children}</div>
      <Footer />
    </>
  );
}
