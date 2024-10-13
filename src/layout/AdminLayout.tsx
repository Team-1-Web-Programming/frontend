import Footer from "@/components/Footer";
import Col from "@/components/Grid/Col";
import Row from "@/components/Grid/Row";
import Header from "@/components/Header";
import Link from "next/link";

export default function AdminLayout(props: any) {
  return (
    <>
      <Header type={"admin"} />
      <div style={{ minHeight: "100%" }}>
        <Row>
          <Col xs={3} style={{ borderRight: "1px solid black", height: "100vh" }}>
            <aside
              style={{
                backgroundColor: "var(--white)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link href={"/dashboard"}>
                <div style={{ padding: 10 }}>Home</div>
              </Link>
              <Link href={"/dashboard/kategori"}>
                <div style={{ padding: 10 }}>Kategori</div>
              </Link>
              <Link href={"/dashboard/blogs"}>
                <div style={{ padding: 10 }}>Blog</div>
              </Link>
            </aside>
          </Col>
          <Col>
            <main>{props?.children}</main>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
