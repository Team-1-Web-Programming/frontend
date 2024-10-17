"use client";
import styles from "./tambah-donasi.module.css";
import ImageUploader from "./image-uploader";
import Breadcrumb from "@/components/Breadcrumb";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useMutation, useQuery } from "@tanstack/react-query";
import getDonationCategories from "@/app/api/donation/category";
import { transformArrayToLabelValue, TransformOptions } from "./utils";
import { useMemo } from "react";
import { addUserDonationProduct } from "@/app/api/user/donation/product/add";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const transformOptions: TransformOptions = {
  valueKey: "id",
  labelKey: "title",
  childrenKey: "children",
};

export default function TambahDonasi() {
  const router = useRouter()
  const { control, register, handleSubmit, setValue, formState } = useForm();
  const qCategoires = useQuery({
    queryKey: ["/donation/category"],
    queryFn: getDonationCategories,
  });

  const transformedData = useMemo(() => {
    return transformArrayToLabelValue(qCategoires?.data, transformOptions);
  }, [qCategoires?.data, transformOptions]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["/user/donation/product/add"],
    mutationFn: addUserDonationProduct,
  });

  const onSubmit = (data: any) => {
    console.log(data, "dadadadada");
    mutate(data, {
      onSuccess() {
        // toast.success("Success! Thank you");
        router.push('/donasi/histori')
      },
      onError(error) {
        toast.error(`Error! ${error?.message}`)
      }
    });
  };

  return (
    <main className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Tambah Donasi</h1>
      <Breadcrumb />
      <div
        className={styles.card}
        style={{ display: "flex", flexDirection: "column", flex: 1, gap: 20 }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1, gap: 20 }}
        >
          <h3>Detail Produk</h3>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            gap: 20,
            width: "100%",
          }}
        >
          <div className={styles.row}>
            <TextInput name={"title"} register={register} label="Nama" />
          </div>
          <div className={styles.row}>
            <TextInput
              name={"amount"}
              register={register}
              label="Jumlah"
              type="number"
            />
          </div>
          <div className={styles.row}>
            <b>Kategori</b>
            <Controller
              name="category_id[]"
              control={control}
              render={({ field }) => (
                <Select {...field} isMulti options={transformedData} />
              )}
            />
          </div>
          <div className={styles.row}>
            <b>Deskripsi</b>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <textarea {...field} />}
            />
          </div>
        </form>
      </div>
      <div
        className={styles.card}
        style={{ display: "flex", gap: 20, flexDirection: "column" }}
      >
        <h3>Foto dan Video</h3>
        <div style={{ flex: 1 }}>
          <ImageUploader setImages={(images: any) => setValue("media[]", images)} />
        </div>
      </div>
      <Button onClick={handleSubmit(onSubmit)} loading={isPending}>
        Save
      </Button>
    </main>
  );
}
