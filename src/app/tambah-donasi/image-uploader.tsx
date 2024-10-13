"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./tambah-donasi.module.css";

export default function ImageUploader() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Image
        src={"https://picsum.photos/200"}
        alt="avatar"
        width={200}
        height={200}
        
        className={styles.image}
        style={{ aspectRatio: 1 / 1 }}
      />
      <Image
        src={"https://picsum.photos/200"}
        alt="avatar"
        width={200}
        height={200}
        className={styles.image}
        style={{ aspectRatio: 1 / 1 }}
      />
      <Image
        src={"https://picsum.photos/200"}
        alt="avatar"
        width={200}
        height={200}
        className={styles.image}
        style={{ aspectRatio: 1 / 1 }}
      />
      <button
        className={styles.card}
        style={{
          width: 200,
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Image src={"/plus.svg"} width={58} height={58} alt="avatar" />
      </button>
    </div>
  );
}
