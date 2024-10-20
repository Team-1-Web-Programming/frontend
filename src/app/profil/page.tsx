"use client";
import Button from "@/components/Button";
import ImageUpload from "@/components/ImageUpload";
import Switch from "@/components/Switch";
import TextInput from "@/components/TextInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { editUser } from "../api/user/edit";
import { toast } from "react-toastify";
import { getUser } from "../api/user";
import { queryClient } from "@/layout/Layout";

type TEditProfil = {
  name: string;
  photo_profile: any;
  password: string;
  password_confirmation: string;
};

const settings = Array.from({ length: 5 }, (_, i) => i + 1);
export default function Profil() {
  const [profil, setProfil] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState, setValue } = useForm<TEditProfil>({
    defaultValues: {
      name: "",
      photo_profile: null,
      password: "",
      password_confirmation: "",
    },
  });

  const qUser = useQuery({
    queryKey: ["/user"],
    queryFn: getUser,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: editUser,
  });

  const onSubmit = (data: TEditProfil) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Edit profil successful!");
        queryClient.invalidateQueries({
          queryKey: ["/user"],
        });
      },
    });
  };

  return (
    <main
      style={{ padding: 40, display: "flex", gap: 20, flexDirection: "column" }}
    >
      <h2 style={{ textAlign: "center" }}>Profil</h2>
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
              src={
                profil ||
                qUser?.data?.data?.photo_profile ||
                `https://avatar.oxro.io/avatar.svg?name=${qUser?.data?.data?.name}&caps=3&bold=true`
              }
              alt="any"
              width={200}
              height={200}
              style={{ borderRadius: 200 }}
            />
            <ImageUpload
              onCropped={(img) => {
                setProfil(img?.croppedImage);
                setValue("photo_profile", img.croppedBlob);
              }}
            >
              <div>
                <Button type="secondary">Ganti Foto Profil</Button>
              </div>
            </ImageUpload>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginTop: 20,
            }}
          >
            <div>
              <TextInput
                name="name"
                label="Nama"
                disabled={!isEditing}
                register={register}
              />
            </div>
            <div>
              <TextInput
                name="password"
                label="Password"
                disabled={!isEditing}
                type="password"
                register={register}
              />
            </div>
            {isEditing && (
              <div>
                <TextInput
                  name="password_confirmation"
                  label="Konfirmasi Password"
                  disabled={!isEditing}
                  type="password"
                  register={register}
                />
              </div>
            )}
          </form>
          <div style={{ marginTop: 20 }}>
            <Button
              onClick={() => {
                if (isEditing) {
                  return handleSubmit(onSubmit);
                } else {
                  setIsEditing(true);
                }
              }}
              loading={isEditing && isPending}
            >
              {isEditing ? `Save` : "Edit"}
            </Button>
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
