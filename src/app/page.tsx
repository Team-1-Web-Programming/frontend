"use client";
import Button from "@/components/Button";
import styles from "./page.module.css";
import FrameDecoration from "@/components/FrameDecoration";
import ItemCard from "@/components/Items";
import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import BlogsCard from "@/components/Card/BlogsCard";
import LogoWhite from "@/components/Logo";
import { withAuth } from "@/helpers/withAuth";
import Image from "next/image";
import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import getBlogs from "./api/blogs/blogs";
import getDonationCategories from "./api/donation/category";

const imageList = [
  "https://picsum.photos/400/300",
  "https://picsum.photos/500/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/300/400",
];

function Home() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const queries = useQueries({
    queries: [
      {
        queryKey: ["/donation/category"],
        queryFn: getDonationCategories,
      },
      {
        queryKey: ["/blog"],
        queryFn: getBlogs,
      },
    ],
  });

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
        overflow: "hidden",
      }}
    >
      <section className={styles.firstSection}>
        <div className={styles.titleContainer}>
          <h1>Selamat Datang Di Guna Ulang</h1>

          <h1 style={{ fontWeight: 1000, color: "var(--primary-green)" }}>
            Tempat Berbagi Untuk Keberlanjutan
          </h1>

          <p>
            {`“Temukan Manfaat Berbagi. Dukung Lingkungan. Solusi Cerdas untuk
            Mengurangi Limbah dan Menjaga Bumi."`}
          </p>

          <div>
            <Link href={"/donasi"}>
              <Button>Berbagi Sekarang!</Button>
            </Link>
          </div>
        </div>
        <div className={styles.decorationContainer}>
          <FrameDecoration imageList={imageList} />
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.secondSection}`}
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
          <Link href={"/kategori"}>
            <Button type="secondary">EXPLORE MORE</Button>
          </Link>
        </div>
        <Image
          src={"/bulp.svg"}
          alt="bulp decor"
          width={166}
          height={194}
          className={styles.bulpDecorLeft}
        />
      </section>
      <section
        className={styles.section}
        style={{
          backgroundColor: "rgba(85, 183, 107, 0.2)",
          padding: "20px 0",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Kategori</h3>
        <div>
          {queries?.[0]?.data && (
            <Carousel slides={queries?.[0]?.data} options={OPTIONS} />
          )}
        </div>
        <Image
          src={"/leaf.svg"}
          alt="leaf decor"
          width={499.22}
          height={461.33}
          className={styles.leafDecorRight}
        />
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
      <section className={`${styles.section} ${styles.sectionAboutUs}`}>
        <Image
          src={"/teamwork.png"}
          alt="team decor"
          fill
          unoptimized
          style={{
            opacity: 0.15,
            pointerEvents: "none",
            objectFit: "cover",
          }}
        />
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
          {/* <Link href={"/blog"}>
            <Button>Read More</Button>
          </Link> */}
        </div>

        <Image
          src={"/leaf.svg"}
          alt="leaf decor"
          width={499.22}
          height={461.33}
          className={styles.leafDecorLeft}
        />
      </section>
      <section className={styles.sectionBlogs}>
        <h3 style={{ textAlign: "center", color: "var(--white)" }}>Blogs</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          {queries?.[1]?.data?.data?.slice(0, 3)?.map((el: any) => {
            return (
              <BlogsCard
                key={el?.id}
                title={el?.title}
                coverImage={el?.cover_image}
                id={el.id}
              />
            );
          })}
          {!queries?.[1]?.isLoading &&
            (!queries?.[1]?.data?.data && (
              <div
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: 'column',
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/no_data.svg"}
                  alt="no data"
                  width={400}
                  height={300}
                />
                <h3 style={{color: 'white'}}>No Data</h3>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default withAuth(Home);
