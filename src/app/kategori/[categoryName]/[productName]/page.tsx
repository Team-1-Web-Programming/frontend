"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Image from "next/image";
const images = [
  "https://w7.pngwing.com/pngs/682/981/png-transparent-number-1-miscellaneous-rectangle-number-thumbnail.png",
  "https://w7.pngwing.com/pngs/604/843/png-transparent-number-parity-building-2-miscellaneous-angle-building.png",
  "https://w7.pngwing.com/pngs/1004/858/png-transparent-number-3-text-logo-number-thumbnail.png",
  "https://i.pinimg.com/1200x/2c/94/7b/2c947bcaf6ca4b1c37f44f9cff180d01.jpg",
];

export default function ProductDetail() {
  return (
    <main>
      <Breadcrumb />
      <section
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <div>
          <div>
            <Image
              src={"https://picsum.photos/200/300"}
              alt="product image"
              width={772}
              height={552}
              style={{ borderRadius: 20 }}
            />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {images.map((el) => (
              <div
                key={el}
                style={{ borderRadius: 10, backgroundColor: "red" }}
              >
                <Image
                  src={"https://picsum.photos/200/300"}
                  alt="mini product image"
                  width={88}
                  height={88}
                  style={{ borderRadius: 10, backgroundColor: "red" }}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Button>Klaim</Button>
            <Button type="secondary">Hubungi Donor</Button>
          </div>
          <div>
            <h4>Detail</h4>
            <ul>
              <li>Lorem Ipsum has been the industry's</li>
              <li>standard dummy text ever since the 1500s,</li>
              <li>when an unknown printer took a galley of type and</li>
              <li>scrambled it to make a type specimen book</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h1>Kamu Juga Mungkin Suka</h1>
      </section>
    </main>
  );
}
