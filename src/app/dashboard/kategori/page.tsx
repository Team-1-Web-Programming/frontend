"use client";
import { useState } from "react";
import ReactModal from "react-modal";
import styles from "./kategori.module.css";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useMutation } from "@tanstack/react-query";
import addDonationCategories from "@/app/api/donation/category/add";
import { toast } from "react-toastify";
import KategoriList from "./KategoriList";
import { queryClient } from "@/layout/Layout";

export default function DashboardBlogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      parent_id: "",
      title: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: addDonationCategories,
    mutationKey: ["/add/donation/category"],
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess() {
        toast.success("Success!");
      },
      onSettled() {
        queryClient.invalidateQueries({ queryKey: ["/donation/category"] });
        handleToggleModal();
        reset();
      },
    });
  };
  return (
    <main>
      <KategoriList onClickAdd={handleToggleModal} />
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleToggleModal}
        contentLabel="Edit Image"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            margin: "auto",
            bottom: "auto",
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)",
          },
        }}
      >
        <h3>Create Category</h3>
        <form>
          <TextInput
            register={register}
            label="Parent Id"
            name="parent_id"
            type="number"
          />
          <TextInput register={register} label="Title" name="title" />
        </form>
        <Button onClick={handleSubmit(onSubmit)}>Create</Button>
      </ReactModal>
    </main>
  );
}
