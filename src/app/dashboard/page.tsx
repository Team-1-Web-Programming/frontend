"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
    const { register, handleSubmit } = useForm();
    return (
        <main className={styles.container}>
            <nav>
                <div>
                    <Link href={'/Beranda'}>
                        Beranda
                    </Link>
                </div>
                <div>
                    <Link href={'/Donasi'}>
                        Donasi
                    </Link>
                </div>
                <div>
                    <Link href={'/Kategori'}>
                        Kategori
                    </Link>
                </div>
                <div>
                    <Link href={'/Blog'}>
                        Blog
                    </Link>
                </div>
            </nav>
        </main>
    );
}
