"use client";
import Image from "next/image";
import styles from "./profil.module.css";
import TotalAktivitasChart from "./BarChart";

export default function Profil() {
  return (
    <main className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Profil Donor Kamu</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Image
              src={"https://picsum.photos/200"}
              alt="avatar"
              width={160}
              height={160}
              style={{ borderRadius: 10 }}
            />
            <h4>Nama Donor</h4>
          </div>
          <div>
            <h4>Donor Details</h4>
            <div>
              Email
              <span style={{ color: "var(--primary-green" }}>
                123ads@gmail.com
              </span>
            </div>
            <div>
              No. Handphone
              <span style={{ color: "var(--primary-green" }}>
                +62 1234567890
              </span>
            </div>
            <div>
              Alamat
              <span style={{ color: "var(--primary-green" }}>
                Jl. 123, Satu, Dua, Tiga
              </span>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <h3>Statistik kamu di Guna Ulang</h3>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <div className={styles.smallStatCard}>
              <Image
                src={"/give-love.svg"}
                alt="give-love"
                width={61}
                height={61}
              />
              <h4>123</h4>
              <p>Kamu telah berbagi</p>
            </div>
            <div className={styles.smallStatCard}>
              <Image
                src={"/food-plate.svg"}
                alt="food-plate"
                width={61}
                height={61}
              />
              <h4>123</h4>
              <p>Kamu telah menyelamatkan makanan</p>
            </div>
            <div className={styles.smallStatCard}>
              <Image
                src={"/water-droplet.svg"}
                alt="water-droplet"
                width={61}
                height={61}
              />
              <h4>123</h4>
              <p>Kamu telah menyelamatkan Air</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Total Aktifitas</h1>
        <div>
          <TotalAktivitasChart />
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Yang Kamu bagikan</h3>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="avatar"
              width={360}
              height={450}
              style={{ borderRadius: 20 }}
            />
            <h4>Bread</h4>
          </div>
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="avatar"
              width={360}
              height={450}
              style={{ borderRadius: 20 }}
            />
            <h4>Skateboard</h4>
          </div>
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="avatar"
              width={360}
              height={450}
              style={{ borderRadius: 20 }}
            />
            <h4>Helmet</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
