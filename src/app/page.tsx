import Button from "@/components/Button";
import styles from "./page.module.css";
import FrameDecoration from "@/components/FrameDecoration";
import ItemCard from "@/components/Items";
import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import BlogsCard from "@/components/Card/BlogsCard";
import LogoWhite from "@/components/Logo";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <section className={styles.firstSection}>
        <div className={styles.titleContainer}>
          <h1>Selamat Datang Di Guna Ulang</h1>

          <h1 style={{ fontWeight: 1000, color: "var(--primary-green)" }}>
            Tempat Berbagi Untuk Keberlanjutan
          </h1>

          <p>
            "Temukan Manfaat Berbagi. Dukung Lingkungan. Solusi Cerdas untuk
            Mengurangi Limbah dan Menjaga Bumi."
          </p>

          <Button>Berbagi Sekarang!</Button>
        </div>
        <div className={styles.decorationContainer}>
          <FrameDecoration />
        </div>
      </section>
      <section
        className={styles.secondSection}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        <h3>Di Sekitar Kamu</h3>
        <div className={styles.itemsContainer}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div>
          <Button type="secondary">EXPLORE MORE</Button>
        </div>
      </section>
      <section>
        <h3 style={{ textAlign: "center" }}>Kategori</h3>
        <div>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
      <section
        style={{
          maxWidth: "70rem",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          margin: "auto",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Daftar Jadi Rekanan Guna Ulang</h3>
        <p>
          Proses pendaftaran GRATIS dan MUDAH. Setiap data yang kamu kumpulkan
          akan terjamin keamanannya dan tidak akan disebar luaskan kepada pihak
          di luar Surplus
        </p>
      </section>
      <section>
        <h3 style={{ textAlign: "center" }}>Tentang Kami</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: 64,
          }}
        >
          <LogoWhite />
          <p>
            Gunaulang adalah platform berbagi barang gratis yang didedikasikan
            untuk mengurangi limbah dan mempromosikan keberlanjutan. Kami
            percaya bahwa setiap barang yang tidak terpakai memiliki nilai dan
            dapat memberikan manfaat bagi orang lain. Dengan Gunaulang, Anda
            dapat mendonasikan barang yang tidak lagi Anda butuhkan, atau
            menemukan barang yang berguna dari orang lain di komunitas Anda.
          </p>
          <h4>Mission Statement</h4>
          <p>
            Menyediakan platform berbagi barang gratis yang memudahkan pengguna
            untuk mendonasikan dan menemukan barang yang tidak terpakai.
            Mengedukasi dan menginspirasi komunitas tentang pentingnya
            keberlanjutan dan pengurangan limbah.Mendorong interaksi positif
            antar pengguna untuk membangun rasa saling membantu dan solidaritas.
          </p>
          <h4>Vision Statement</h4>
          <p>
            “Menciptakan lingkungan yang lebih bersih dan berkelanjutan dengan
            memfasilitasi pertukaran barang di antara individu, serta membangun
            komunitas yang saling peduli dan terinspirasi untuk berkontribusi
            dalam pengurangan limbah demi menjaga bumi untuk generasi
            mendatang.”
          </p>
          <Button>Read More</Button>
        </div>
      </section>
      <section className={styles.sectionBlogs}>
        <h3>Blogs</h3>
        <div style={{ display: "flex", justifyContent: 'center', gap: 20 }}>
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </div>
      </section>
    </main>
  );
}
