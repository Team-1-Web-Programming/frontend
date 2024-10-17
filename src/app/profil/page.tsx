"use client";
import Button from "@/components/Button";
import ImageUpload from "@/components/ImageUpload";
import Switch from "@/components/Switch";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";

const settings = Array.from({ length: 5 }, (_, i) => i + 1);
export default function Profil() {
  const [profil, setProfil] = useState<any>(null);
  return (
    <main
      style={{ padding: 40, display: "flex", gap: 20, flexDirection: "column" }}
    >
      <h2 style={{ textAlign: "center" }}>Akun Donee</h2>
      <div
        style={{
          display: "flex",
          padding: 20,
          border: "1px solid var(--primary-green)",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3>Detail Akun</h3>
        </div>
        <div style={{ flex: 3 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Image
              src={profil || "https://picsum.photos/200/300"}
              alt="any"
              width={200}
              height={200}
              style={{ borderRadius: 200 }}
            />
            <ImageUpload onCropped={(img) => setProfil(img?.croppedImage)}>
              <div>
                <Button type="secondary">Ganti Foto Profil</Button>
              </div>
            </ImageUpload>
          </div>
          <div>
            <div>
              <TextInput name='name' label="Nama" />
            </div>
            <div>
              <TextInput name="password" label="Password" />
            </div>
            <div style={{ marginTop: 20 }}>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: 20,
          border: "1px solid var(--primary-green)",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3>Setting lain</h3>
        </div>
        <div
          style={{ flex: 3, display: "flex", flexDirection: "column", gap: 20 }}
        >
          {settings.map((e) => (
            <div
              key={e}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Settingan</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div>
                <Switch />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
