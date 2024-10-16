"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import ButtonGoogle from "@/components/Button/ButtonGoogle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { toast } from "react-toastify";
import LoginData from "@/types/login";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("Login successful!");
        router.push("/");
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Login failed.");
      },
      onSettled: () => {
        // Optional: Runs on both success and error
      },
    });
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
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            register={register}
            options={{
              required: "Please enter your email",
            }}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p style={{color: 'red'}}>{message}</p>}
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            register={register}
            options={{
              required: "Please enter your password",
            }}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p style={{color: 'red'}}>{message}</p>}
          />
        </form>
        <div className={styles.buttonContainer}>
          <Button
            loading={isPending}
            style={{ width: "100%" }}
            onClick={handleSubmit(onSubmit)}
          >
            Sign in
          </Button>
          <ButtonGoogle style={{ width: "100%" }}>
            Sign in with Google
          </ButtonGoogle>
          <p>
            {`Don't have an account? `}
            <Link href={"/signup"}>Sign up fo free!</Link>
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
