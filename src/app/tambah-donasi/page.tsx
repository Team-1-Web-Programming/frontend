"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./tambah-donasi.module.css";
import ImageUploader from "./image-uploader";

export default function Profil() {
  return (
    <main className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Tambah Donasi</h1>
      <p>{"Donor > Tambah Produk"}</p>
      <div className={styles.card} style={{ display: "flex", flexDirection: "column", flex: 1, gap: 20 }}>
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1, gap: 20 }}
        >
          <h3>Detail Produk</h3>
         
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", flex: 2, gap: 20 }}
        >
          <div className={styles.row}>
            <b>Nama</b>
            <p>Kebaya Biru Like New</p>
          </div>
          <div className={styles.row}>
            <b>Kategori</b>
            <p>Pakaian</p>
          </div>
          <div className={styles.row}>
            <b>Nama</b>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card} style={{ display: 'flex',  gap: 20, flexDirection: 'column'}}>
        <h3>Foto dan Video</h3>
        <div style={{flex: 1}}>
          <ImageUploader />
        </div>
      </div>
    </main>
  );
}
