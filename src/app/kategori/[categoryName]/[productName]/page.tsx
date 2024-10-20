"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ZoomImage from "@/components/ImageZoom";
const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/200",
];

export default function ProductDetail() {
  const pathname = usePathname();

  const handleRedirectWA = () => {
    const message = encodeURIComponent(
      `Hi, I want to claim this ${window.location.origin}${pathname}. Is it still available?`
    );
    const whatsappUrl = `https://wa.me/${`08277272121`}?text=${message}`;
    window.location.href = whatsappUrl;
  };
  return (
    <main>
      <Breadcrumb />
      <section
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <div>
          <div>
            <ZoomImage
              src={"https://picsum.photos/200/300"}
              alt="product image"
              width={772}
              height={552}
              // style={{ borderRadius: 20 }}
            />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {images.map((el) => (
              <div key={el} style={{ borderRadius: 10 }}>
                <Image
                  src={"https://picsum.photos/200/300"}
                  alt="mini product image"
                  width={88}
                  height={88}
                  style={{ borderRadius: 10 }}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <Image src={"/location.svg"} alt="loc" width={16} height={16} />
            <span>Abcd, Bali</span>
          </div>
          <h2>Nama Barang</h2>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Button>Klaim</Button>
            <Button type="secondary" onClick={handleRedirectWA}>
              Hubungi Donor
            </Button>
          </div>
          <div>
            <h4>Detail</h4>
            <ul>
              <li>{`Lorem Ipsum has been the industry's`}</li>
              <li>standard dummy text ever since the 1500s,</li>
              <li>when an unknown printer took a galley of type and</li>
              <li>scrambled it to make a type specimen book</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h1
          style={{
            color: "var(--primary-green)",
            textAlign: "center",
            padding: 40,
          }}
        >
          Kamu Juga Mungkin Suka
        </h1>
        <div style={{ display: "flex", gap: 20 }}>
          {images.map((el) => (
            <div
              key={el}
              style={{
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Image
                src={el}
                alt="mini product image"
                width={282}
                height={285}
                style={{ borderRadius: 10 }}
              />
              <h4>Polo with Contrast Trims</h4>
              <p>Sleman, Yogyakarta</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
