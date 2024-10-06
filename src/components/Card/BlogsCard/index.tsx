import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function BlogsCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--white)",
        borderRadius: 20,
        maxWidth: "25rem",
        position: "relative",
      }}
    >
      <div
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "var(--white)",
        }}
      >
        <Image
          src={"/floral-image.png"}
          alt="Something"
          layout="responsive"
          width={360}
          height={260}
          style={{ borderRadius: 20, objectFit: "cover", aspectRatio: 360 / 260 }}
        />
      </div>
      <div
        style={{
          backgroundColor: "var(--white)",
          position: "relative",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          gap: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <h3
          style={{
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Gunaulang Mengubah Kehidupan Penggunanya
        </h3>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Baca kisah inspiratif dari pengguna Gunaulang yang menemukan barang
          berguna secara gratis.
        </p>
        <Link href={"/blog"}>
          <Button>READ MORE</Button>
        </Link>
      </div>
    </div>
  );
}
