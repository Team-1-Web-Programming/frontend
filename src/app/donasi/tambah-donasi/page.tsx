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
import { useEffect, useMemo, useState } from "react";
import { addUserDonationProduct } from "@/app/api/user/donation/product/add";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ReactModal from "react-modal";
import SwitchButton from "@/components/Switch";
import RadioButton from "@/components/Radio";
import { getAddresses } from "@/app/api/user/address/addresses";
import { addAddress } from "@/app/api/user/address/add";
import { queryClient } from "@/layout/Layout";
import { editAddress } from "@/app/api/user/address/edit";
import { ErrorMessage } from "@hookform/error-message";
import { getCitiesByProvince } from "@/app/api/city";
import { getProvince } from "@/app/api/provinsi";

const transformOptions: TransformOptions = {
  valueKey: "id",
  labelKey: "title",
  childrenKey: "children",
};

export default function TambahDonasi() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<string | number>("");
  const [selectedProvince, setSelectedProvince] = useState<any>();
  const { control, register, handleSubmit, setValue, formState, getValues } =
    useForm();

  const {
    control: addressControl,
    register: addressRegister,
    handleSubmit: addressHandleSubmit,
    setValue: addressSetValue,
    formState: addressFormState,
    getValues: getAddressValues,
    reset,
    resetField,
  } = useForm();

  const qCategoires = useQuery({
    queryKey: ["/donation/category"],
    queryFn: getDonationCategories,
  });

  const qAddresses = useQuery({
    queryKey: ["/user/address"],
    queryFn: getAddresses,
  });

  const { data: provinceOptions } = useQuery({
    queryKey: ["/provinsi"],
    queryFn: getProvince,
    staleTime: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  const { data: cityOptions } = useQuery({
    queryKey: ["/cities", selectedProvince?.id],
    queryFn: getCitiesByProvince,
    staleTime: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  const transformedData = useMemo(() => {
    return transformArrayToLabelValue(qCategoires?.data, transformOptions);
  }, [qCategoires?.data, transformOptions]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["/user/donation/product/add"],
    mutationFn: addUserDonationProduct,
  });

  const { mutate: mutateAddress, isPending: isAddressPending } = useMutation({
    mutationKey: ["/user/address/add"],
    mutationFn: addAddress,
  });

  const { mutate: mutateEditAddress, isPending: isEditAddressPending } =
    useMutation({
      mutationKey: ["/user/address/edit"],
      mutationFn: editAddress,
    });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess() {
        router.push("/donasi/histori");
      },
    });
  };

  const onAddressSubmit = (data: any) => {
    mutateAddress(
      { ...data, province: data?.province?.value, city: data?.city?.value },
      {
        onSuccess() {
          toast.success("Success! Berhasil menambahkan address");
          queryClient.invalidateQueries({ queryKey: ["/user/address"] });
          handleToggleModal();
          reset();
        },
      }
    );
  };

  const onRadioChange = (value: string | number) => {
    setSelectedRadio(value);
    const data = qAddresses?.data?.find((el: any) => {
      return el.id?.toString() === value;
    });
    if (data) {
      setSelectedRadio(data?.id);
      mutateEditAddress(data);
    }
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!qAddresses.isLoading) {
      const selectedAddress = qAddresses?.data?.find((el: any) => {
        return el.is_default === 1;
      });
      setSelectedRadio(selectedAddress?.id);
    }
  }, [qAddresses.isLoading]);

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
          <ImageUploader
            limit={1}
            setImages={(images: any) => setValue("media[]", images)}
          />
        </div>
      </div>
      <div
        className={styles.card}
        style={{ display: "flex", gap: 20, flexDirection: "column" }}
      >
        <h3>Alamat</h3>
        <div style={{ flex: 1 }}>
          {qAddresses.data?.map((el: any) => (
            <div
              key={el?.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <RadioButton
                name="id"
                value={el.id}
                selectedValue={selectedRadio}
                onChange={onRadioChange}
              />
              <div>
                <h4>{`${el?.address}, ${el?.postal_code}`}</h4>
                <p>{`${el?.city}, ${el?.province}, ${el?.country}`}</p>
                <p>{`Kontak: ${el?.name}, ${el?.phone}`}</p>
              </div>
            </div>
          ))}

          <Button onClick={handleToggleModal}>Tambah Alamat</Button>
        </div>
      </div>
      <Button onClick={handleSubmit(onSubmit)} loading={isPending}>
        Save
      </Button>

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
            padding: 30,
            margin: "auto",
            bottom: "auto",
            left: "50%",
            right: "auto",
            transform: "translateX(-50%) translateY(10%)",
          },
        }}
      >
        <h3>Tambah Alamat</h3>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            gap: 10,
            marginBottom: 20,
            width: "100%",
          }}
        >
          <TextInput
            name={"name"}
            register={addressRegister}
            options={{ required: "Required" }}
            label="Nama"
            placeholder="Amanda"
          />
          <ErrorMessage
            name={"name"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextInput
            name={"phone"}
            register={addressRegister}
            options={{ required: "Required" }}
            label="Phone"
            placeholder="081234567890"
          />
          <ErrorMessage
            name={"phone"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextInput
            name={"country"}
            register={addressRegister}
            label="Negara"
            placeholder="Indonesia"
            disabled
            defaultValue={"Indonesia"}
          />

          <div className={styles.row}>
            <b>Provinsi</b>
            <Controller
              name="province"
              control={addressControl}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={provinceOptions}
                  onChange={(value) => {
                    addressSetValue("province", value);
                    resetField("city");
                    setSelectedProvince(
                      provinceOptions?.find((e) => e.id === value.id)
                    );
                  }}
                  placeholder="Yogyakarta"
                />
              )}
            />
          </div>
          <ErrorMessage
            name={"province"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <div className={styles.row}>
            <b>City</b>
            <Controller
              name="city"
              control={addressControl}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <Select {...field} options={cityOptions} placeholder="Sleman" />
              )}
            />
          </div>
          <ErrorMessage
            name={"city"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextInput
            name={"address"}
            register={addressRegister}
            options={{ required: "Required" }}
            label="Adress"
            placeholder="No. 111, Jalan Mawar Melati, Indah"
          />
          <ErrorMessage
            name={"address"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextInput
            name={"postal_code"}
            options={{ required: "Required" }}
            register={addressRegister}
            label="Kode Pos"
            placeholder="12345"
          />
          <ErrorMessage
            name={"postal_code"}
            errors={addressFormState?.errors}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <div
            className={styles.row}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <b>Jadikan Alamat Utama</b>
            <SwitchButton
              isChecked={getAddressValues().is_default}
              onChange={(isChecked: boolean) =>
                addressSetValue("is_default", isChecked ? 1 : 0)
              }
            />
          </div>
        </form>
        <Button
          onClick={addressHandleSubmit(onAddressSubmit)}
          loading={isAddressPending}
        >
          Save
        </Button>
      </ReactModal>
    </main>
  );
}
