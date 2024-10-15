"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./tambah-donasi.module.css";
import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function ImageUploader() {
  const [images, setImages] = useState<any[]>([]);
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {images.map((e) => (
        <Image
          key={e}
          src={e}
          alt="avatar"
          width={200}
          height={200}
          className={styles.image}
          style={{ aspectRatio: 1 / 1 }}
        />
      ))}
      <ImageUpload
        onCropped={(croppedImage) => setImages([...images, croppedImage])}
      >
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
      </ImageUpload>
    </div>
  );
}
