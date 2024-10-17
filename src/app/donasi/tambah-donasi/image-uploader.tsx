"use client";
import Image from "next/image";
import styles from "./tambah-donasi.module.css";
import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function ImageUploader(props?: any) {
  const [images, setImages] = useState<any[]>([]);
  const [jpegImages, setJpegImages] = useState<any>([]);

  const handleCropped = ({
    croppedImage,
    croppedBlob,
  }: {
    croppedImage: string;
    croppedBlob: Blob;
  }) => {
    setImages([...images, croppedImage]);
    if (props?.setImages) {
      const now = Date.now();
      console.log(croppedImage, croppedBlob, "newFile");
      setJpegImages([...jpegImages, croppedBlob]);
      props?.setImages([...jpegImages, croppedBlob]);
    }
  };

  useEffect(() => {
    return () => images.forEach((e) => URL.revokeObjectURL(e));
  });

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
      <ImageUpload onCropped={handleCropped as any}>
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
