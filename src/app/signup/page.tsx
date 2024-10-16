"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import Link from "next/link";
import SignUpData from "@/types/signup";

export default function SignUp() {
  const { register: formRegister, handleSubmit, formState } = useForm<SignUpData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  console.log(formState)
  const onSubmit = (data: SignUpData) => {
    console.log(data);
  };

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
            name="name"
            placeholder="Enter your name"
            register={formRegister}
            options={{ required: "Please enter your name" }}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            register={formRegister}
            options={{ required: "Please enter your email" }}
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            register={formRegister}
            options={{required: "Please enter your password"}}
          />
          <TextInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            register={formRegister}
            name="password_confirmation"
            options={{
              required: "Please confirm your password",
            }}
          />
        </form>
        <div className={styles.buttonContainer}>
          <Button style={{ width: "100%" }} onClick={handleSubmit(onSubmit)}>
            Sign Up
          </Button>
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
