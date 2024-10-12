"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import ButtonGoogle from "@/components/Button/ButtonGoogle";

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <main className={styles.container}>
      <div className={styles.mainContent}>
        <div>
          <h1>Selamat Datang!</h1>
          <p>Welcome back! Please enter your details.</p>
        </div>
        <form>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("firstName")}
          />
          <TextInput
            label="Password"
            type="password"
            {...register("firstName")}
          />
        </form>
        <div className={styles.buttonContainer}>
          <Button style={{ width: "100%" }}>Sign in</Button>
          <ButtonGoogle style={{ width: "100%" }}>
            Sign in with Google
          </ButtonGoogle>
        </div>
      </div>
      <div>
        <Image
          src={"https://picsum.photos/540/650"}
          alt="banner"
          width={540}
          height={650}
          style={{ objectFit: "cover", aspectRatio: 540 / 650 }}
        />
      </div>
    </main>
  );
}
