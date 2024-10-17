"use client";
import Button from "@/components/Button";
import styles from "./page.module.css";
import FrameDecoration from "@/components/FrameDecoration";
import { withAuth } from "@/helpers/withAuth";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";

const imageList = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/200",
];

function Donasi() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        overflow: "hidden",
      }}
    >
      <section className={styles.firstSection}>
        <div className={styles.titleContainer}>
          <h1>Mari Berkontribusi!</h1>

          <h1 style={{ fontWeight: 1000, color: "var(--primary-green)" }}>
            Donasikan Barang Anda
          </h1>

          <p>
            {`“Bergabunglah dengan kami dalam misi untuk mengurangi limbah dan 
membantu sesama dengan mendonasikan barang yang tidak lagi Anda gunakan.”`}
          </p>

          <div>
            <Link href={"/donasi/tambah-donasi"}>
              <Button>Berbagi Sekarang!</Button>
            </Link>
          </div>
        </div>
        <div className={styles.decorationContainer}>
          <FrameDecoration imageList={imageList} />
        </div>
      </section>
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: 40,
          backgroundColor: "var(--accent-green)",
        }}
      >
        <h2 style={{ textAlign: "center", padding: 20 }}>
          Stok Barang Tak Terpakai di Rumah?
        </h2>
        <p>
          Apakah Anda memiliki barang yang tidak lagi digunakan? Mari
          berkontribusi dengan mendonasikan barang Anda untuk membantu orang
          lain!
        </p>
      </section>
      <section
        className={styles.section}
        style={{
          padding: 40,
        }}
      >
        <h1
          style={{
            fontWeight: 1000,
            color: "var(--primary-green)",
            textAlign: "center",
          }}
        >
          Guna Ulang: Solusi Berbagi Barang
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <Image
              src={"/sharing-ai.svg"}
              alt="sharing-ai"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Donasi Barang Dengan Mudah
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Kelola barang yang ingin Anda donasikan dalam satu aplikasi yang
              praktis.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <Image
              src={"/sharing-ai.svg"}
              alt="sharing-ai"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Notifikasi Pengingat
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Atur pengingat untuk mendonasikan barang Anda pada waktu yang
              tepat.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
          >
            <Image
              src={"/sharing-ai.svg"}
              alt="sharing-ai"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Fleksibilitas Dalam Berbagi
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Donasikan barang sesuai kebutuhan dan waktu Anda.
            </p>
          </div>
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
        className={styles.section}
        style={{
          padding: "20px 0",
        }}
      >
        <h1
          style={{
            fontWeight: 1000,
            color: "var(--primary-green)",
            textAlign: "center",
            padding: 20,
          }}
        >
          Keuntungan Menjadi Donor Guna Ulang
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <Image
              src={"/Membantu sesama.svg"}
              alt="Membantu sesama"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Membantu Sesama
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Setiap barang yang Anda sumbangkan dapat memberikan manfaat bagi
              orang lain di komunitas.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <Image
              src={"/Partisipasi.svg"}
              alt="Partisipasi"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Berpartisipasi Dalam Gerakan Keberlanjutan
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Dengan mendonasikan barang, Anda berkontribusi dalam mengurangi
              limbah.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0",
            }}
          >
            <Image
              src={"/Komunitas.svg"}
              alt="Komunitas"
              width={273}
              height={170}
            />
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Komunitas Yang Peduli
            </h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Bergabunglah dengan orang-orang yang memiliki visi yang sama untuk
              menciptakan dampak positif.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        style={{
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <h1
          style={{
            fontWeight: 1000,
            textAlign: "center",
            padding: 20,
          }}
        >
          Cara Mendonasikan Barang
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--white)",
              padding: 20,
              backgroundColor: "var(--primary-green)",
              borderRadius: 20,
            }}
          >
            <Image
              src={"/Register.svg"}
              alt="register"
              width={102}
              height={102}
            />
            <h4>Registrasi</h4>
            <p>Buat akun di Gunaulang</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--white)",
              padding: 20,
              backgroundColor: "var(--primary-green)",
              borderRadius: 20,
            }}
          >
            <Image
              src={"/formulir.svg"}
              alt="register"
              width={102}
              height={102}
            />
            <h4>Registrasi</h4>
            <p>Buat akun di Gunaulang</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--white)",
              padding: 20,
              backgroundColor: "var(--primary-green)",
              borderRadius: 20,
            }}
          >
            <Image
              src={"/Request.svg"}
              alt="register"
              width={102}
              height={102}
            />
            <h4>Registrasi</h4>
            <p>Buat akun di Gunaulang</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <h4>Bergabunglah dalam Gerakan Zero Waste</h4>
          <p>
            Mari kita bersama-sama mengurangi limbah dengan mendonasikan barang
            yang tidak terpakai!
          </p>
          <Link href={"/donasi/tambah-donasi"}>
            <Button>Jadi Donor Sekarang!</Button>
          </Link>
        </div>
      </section>
      <section style={{ maxWidth: "60rem", margin: "auto", padding: 40 }}>
        <h1
          style={{
            fontWeight: 1000,
            textAlign: "center",
            color: "var(--primary-green)",
            padding: 20,
          }}
        >
          Pertanyaan Seputar Guna Ulang
        </h1>
        <Accordion
          items={[
            {
              title: "Apa saja barang yang bisa didonasikan?",
              content:
                "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
            },
            {
              title: "Bagaimana cara pengambilan barang yang didonasikan?",
              content:
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
            },
            {
              title: "Apakah ada biaya untuk mendonasikan barang?",
              content:
                "Lorem Ipsum was originally taken from a Latin text by the Roman philosopher Cicero, a connection that Latin scholar Richard McClintock made in the 1980s. It has gone through significant changes over the centuries, with words being taken out, shortened, and added",
            },
          ]}
        />
      </section>
    </main>
  );
}

export default withAuth(Donasi);
