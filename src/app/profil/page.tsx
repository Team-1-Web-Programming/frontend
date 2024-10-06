"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./profil.module.css";

export default function Profil() {
  return (
    <main className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Profil Donor Kamu</h1>
      <div>
        <div>
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="avatar"
              width={160}
              height={160}
            />
            <h4>Nama Donor</h4>
          </div>
          <div>
            <h4>Donor Details</h4>
            <div>
              Email<span>123ads@gmail.com</span>
              <div>
                No. Handphone<span>+62 1234567890</span>
                <div>
                  Alamat<span>Jl. 123, Satu, Dua, Tiga</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Statistik kamu di Guna Ulang</h3>
          <div>
            <div>
              <Image
                src={"/give-love.svg"}
                alt="give-love"
                width={61}
                height={61}
              />
              <h4>123</h4>
              <p>Kamu telah berbagi</p>
            </div>
            <div>
              <Image
                src={"/food-plate.svg"}
                alt="food-plate"
                width={61}
                height={61}
              />
              <h4>123</h4>
              <p>Kamu telah menyelamatkan makanan</p>
            </div>
            <div>
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
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Yang Kamu bagikan</h3>
        <Image
          src={"https://picsum.photos/200"}
          alt="avatar"
          width={360}
          height={450}
        />
        <Image
          src={"https://picsum.photos/200"}
          alt="avatar"
          width={360}
          height={450}
        />
        <Image
          src={"https://picsum.photos/200"}
          alt="avatar"
          width={360}
          height={450}
        />
      </div>
    </main>
  );
}
