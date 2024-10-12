"use client";
import ItemCard from "@/components/Items";
import Pill from "@/components/Pill";
import { useState } from "react";
import styles from "./page.module.css";
import KategoriCard from "@/components/Card/KategoriCard";
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";

const pills = ["All Kategori", "Kategori 2", "Kategori 3"];
export default function Kategori() {
  const [selectedPill, setSelectedPill] = useState<number | null>(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 30,
        padding: 40,
      }}
    >
      <h1 style={{ textAlign: "center", color: "var(--primary-green)" }}>
        Barang & Makanan di Guna Ulang
      </h1>
      <p style={{ textAlign: "center" }}>
        Temukan berbagai kategori barang yang tersedia di Guna Ulang. Pilih
        kategori untuk menemukan barang yang paling sesuai dengan kebutuhanmu
        atau barang yang ingin kamu donasikan.
      </p>
      <input className={styles.search} placeholder="Cari barang" />
      <h2 style={{ textAlign: "center" }}>Di Sekitar Kamu</h2>
      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <h2 style={{ textAlign: "center" }}>Kategori</h2>
      <div className={styles.pillGroup}>
        {pills.map((pill, index) => (
          <Pill
            key={index}
            label={pill}
            isSelected={selectedPill === index}
            onClick={() => setSelectedPill(index)}
          />
        ))}
      </div>
      <Row
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col> <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
        <Col>
          <KategoriCard />
        </Col>
      </Row>
    </div>
  );
}
