"use client";
import Image from "next/image";
import DonasiAnalisisChart from "./LineChart";
import DoughnutChart from "./Doughnut";
import styles from "./page.module.css";
import DonasiList from "./DonasiList";

export default function Donasi() {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Donasi</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <div className={styles.totalDonasiCard}>
          <h4>Total Donasi</h4>
          <h3>455</h3>
          <p>Total Product</p>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Image src={"/up.svg"} alt="up" width={20} height={20} />
            <span>10.2</span>
            <span>+1.01% this week</span>
          </div>
        </div>
        <div className={styles.totalDonasiCard}>
          <h4>Total Donasi</h4>
          <h3>455</h3>
          <p>Total Product</p>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Image src={"/up.svg"} alt="up" width={20} height={20} />
            <span>10.2</span>
            <span>+1.01% this week</span>
          </div>
        </div>
        <div className={styles.totalDonasiCard}>
          <h4>Total Donasi</h4>
          <h3>455</h3>
          <p>Total Product</p>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Image src={"/up.svg"} alt="up" width={20} height={20} />
            <span>10.2</span>
            <span>+1.01% this week</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: 20, alignItems: 'center' }}>
          <div style={{ flex: 3 }}>
            <DonasiAnalisisChart />
          </div>
          <div style={{ flex: 1 }}>
            <DoughnutChart />
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <DonasiList />
        </div>
      </div>
    </div>
  );
}
