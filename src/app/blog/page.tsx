import Button from "@/components/Button";
import Image from "next/image";
import BlogsCard from "@/components/Card/BlogsCard";
import RenderHTML from "./RenderHTML";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <main>
      <header className={styles.blogHeader}>
        <h1 style={{ textAlign: "center" }}>Blog Guna Ulang</h1>
        <h4 style={{ textAlign: "center", color: "var(--primary-green)" }}>
          Temukan tips, inspirasi, dan kisah menarik tentang berbagi barang,
          mengurangi limbah, dan membangun komunitas yang peduli lingkungan.
          Baca artikel terbaru dari Gunaulang di sini.
        </h4>
        <div>
          <Button>Artikel Terbaru</Button>
        </div>
      </header>
      <article className={styles.content}>
        <h3>Mengapa Berbagi Barang Membantu Mengurangi Limbah?</h3>
        <Image
          src={"https://picsum.photos/1152/491"}
          width={1152}
          height={491}
          layout="responsive"
          alt="BlogImage"
          style={{ borderRadius: 20 }}
        />
        <div>
          <RenderHTML />
        </div>
      </article>
      <div>
        <h3 style={{ textAlign: "center" }}>Daftar Artikel Terkini</h3>
      </div>
      <div className={styles.blogItemsContainer}>
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </main>
  );
}
