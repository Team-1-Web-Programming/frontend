"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import ButtonGoogle from "@/components/Button/ButtonGoogle";
import Link from "next/link";

export default function SignUp() {
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
            label="Name"
            placeholder="Enter your name"
            {...register("name")}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
           <TextInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register("password_confirmation")}
          />
        </form>
        <div className={styles.buttonContainer}>
          <Button style={{ width: "100%" }}>Sign Up</Button>
          <p>
            Already have an account? <Link href={"/login"}>Login</Link>
          </p>
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
