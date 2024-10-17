"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import Link from "next/link";
import SignUpData from "@/types/signup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { register } from "../api/register";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter()
  const { register: formRegister, handleSubmit, formState } = useForm<SignUpData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  console.log(formState)
  const { mutate, isPending } = useMutation({
    mutationFn: register,
  });

  const onSubmit = (data: SignUpData) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("Register successful!");
        router.push("/login");
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Register failed.");
      },
      onSettled: () => {
      },
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.mainContent}>
        <div>
          <h1>Sign Up</h1>
          <p>Please enter your details.</p>
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
