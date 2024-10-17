import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function BlogsCard({
  title = "Gunaulang Mengubah Kehidupan Penggunanya",
  subtitle = "Baca kisah inspiratif dari pengguna Gunaulang yang menemukan barang berguna secara gratis.",
  coverImage = "/floral-image.png",
  ...rest
}) {
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
          src={coverImage}
          alt="Something"
          layout="responsive"
          width={360}
          height={260}
          style={{
            borderRadius: 20,
            objectFit: "cover",
            aspectRatio: 360 / 260,
          }}
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
            // display: "-webkit-box",
            // "-webkit-box-orient": "vertical",
            // "-webkit-line-clamp": 3,
            // overflow: "hidden",
            // textOverflow: 'ellipsis',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            textAlign: "center",
          }}
        >
          {subtitle}
        </p>
        <Link href={`/blog/${rest?.id}`}>
          <Button>READ MORE</Button>
        </Link>
      </div>
    </div>
  );
}
