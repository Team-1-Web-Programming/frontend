"use client";
import Footer from "@/components/Footer";
import Col from "@/components/Grid/Col";
import Row from "@/components/Grid/Row";
import Header from "@/components/Header";
import Link from "next/link";

export default function AdminLayout(props: any) {
  return (
    <>
      <Header type={"admin"} />
      <div style={{ minHeight: "100%", maxWidth: "var(--max-width)", margin: 'auto' }}>
        <Row>
          <Col
            xs={3}
            md={3}
            style={{ borderRight: "1px solid black", borderLeft: "1px solid black", height: "100vh" }}
          >
            <aside
              style={{
                backgroundColor: "var(--white)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link href={"/dashboard"} style={{ color: "inherit" }}>
                <div style={{ padding: 10 }}>Home</div>
              </Link>
              <Link href={"/dashboard/donasi"} style={{ color: "inherit" }}>
                <div style={{ padding: 10 }}>Donasi</div>
              </Link>
              <Link href={"/dashboard/kategori"} style={{ color: "inherit" }}>
                <div style={{ padding: 10 }}>Kategori</div>
              </Link>
              <Link href={"/dashboard/blogs"} style={{ color: "inherit" }}>
                <div style={{ padding: 10 }}>Blog</div>
              </Link>
            </aside>
          </Col>
          <Col xs={20} style={{paddingTop: 20}}>
            {props?.children}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
