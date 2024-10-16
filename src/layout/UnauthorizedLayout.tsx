"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function UnauthorizedLayout(props: any) {
  return (
    <>
      <Header type="unauthorized" />
      <div
        style={{
          minHeight: "100%",
          maxWidth: "var(--max-width)",
          margin: "auto",
        }}
      >
        {props?.children}
      </div>
      <Footer />
    </>
  );
}
