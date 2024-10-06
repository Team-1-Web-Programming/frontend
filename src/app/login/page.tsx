"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <main className={styles.container}>
      <div>
        <h1>Selamat Datang!</h1>
        <h2>Welcome back! Please enter your details.</h2>
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
        <Button>Sign in</Button>
        <Button>Sign in with Google</Button>
      </div>
      <div>
        <Image
          src={"https://picsum.photos/200/300"}
          width={540}
          height={650}
          alt="banner"
        />
      </div>
    </main>
  );
}
