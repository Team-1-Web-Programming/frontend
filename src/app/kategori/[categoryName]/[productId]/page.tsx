"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import ZoomImage from "@/components/ImageZoom";
import { useMutation, useQuery } from "@tanstack/react-query";
import getDonationProductById from "@/app/api/donation/product/getDonationProductById";
import { useEffect, useState } from "react";
import { claimDonationProduct } from "@/app/api/user/donation/claim";
import ReactModal from "react-modal";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/200",
];

export default function ProductDetail() {
  const pathname = usePathname();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://picsum.photos/200/300"
  );

  const { register, handleSubmit } = useForm();

  const qDProduct = useQuery({
    queryFn: getDonationProductById,
    queryKey: ["/donation/product", params?.productId],
  });

  const { mutate } = useMutation({
    mutationKey: ["/user/donation/claim", params?.productId],
    mutationFn: claimDonationProduct,
  });

  const handleRedirectWA = () => {
    const message = encodeURIComponent(
      `Hi ${qDProduct?.data?.address?.name}, I want to claim this donation: ${qDProduct?.data?.title} | ${window.location.origin}${pathname}. Is it still available?`
    );
    const whatsappUrl = `https://wa.me/${qDProduct?.data?.address?.phone}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const onSubmit = (data: any) => {
    mutate(
      { ...data, id: params?.productId },
      {
        onSuccess() {
          toast.success(
            `Berhasil klaim ${qDProduct?.data?.amount} ${qDProduct?.data?.title}`
          );
        },
      }
    );
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!qDProduct.isLoading) {
      setSelectedImage(qDProduct?.data?.donation_product_media?.[0]?.url);
    }
  }, [qDProduct.isLoading]);

  return (
    <main>
      <Breadcrumb />
      <section
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <div>
          <div>
            <ZoomImage
              src={selectedImage}
              alt="product image"
              width={772}
              height={552}
              style={{ borderRadius: 20 }}
            />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {qDProduct?.data?.donation_product_media?.map((el: any) => (
              <div
                key={el.id}
                style={{ borderRadius: 10 }}
                onClick={() => setSelectedImage(el.url)}
              >
                <Image
                  src={el?.url || "https://picsum.photos/200/300"}
                  alt="mini product image"
                  width={88}
                  height={88}
                  style={{ borderRadius: 10 }}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={"/location.svg"} alt="loc" width={16} height={16} />
            <span>{`${qDProduct?.data?.address?.city}, ${qDProduct?.data?.address?.province}`}</span>
          </div>
          <h2>{qDProduct?.data?.title}</h2>
          <p>{qDProduct?.data?.description}</p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {qDProduct?.data?.amount > 0 && (
              <Button onClick={handleToggleModal}>Klaim</Button>
            )}
            <Button type="secondary" onClick={handleRedirectWA}>
              Hubungi Donor
            </Button>
          </div>
          <div>
            <h4>Detail</h4>
            <ul>
              <li>
                Stock:{" "}
                <b>
                  {qDProduct?.data?.amount > 0
                    ? qDProduct?.data?.amount
                    : "Habis"}
                </b>
              </li>
              <li>
                Alamat:{" "}
                <b>
                  {qDProduct?.data?.address?.address}
                  {", "}
                  {`${qDProduct?.data?.address?.city}, ${qDProduct?.data?.address?.province}`}
                </b>
              </li>
              <li>
                Donatur: <b>{qDProduct?.data?.user?.name}</b>
              </li>
              <li>
                Contact Person: <b>{qDProduct?.data?.address?.name}</b>
              </li>
              <li>
                Phone Number: <b>{qDProduct?.data?.address?.phone}</b>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h1
          style={{
            color: "var(--primary-green)",
            textAlign: "center",
            padding: 40,
          }}
        >
          Kamu Juga Mungkin Suka
        </h1>
        <div style={{ display: "flex", gap: 20 }}>
          {images.map((el) => (
            <div
              key={el}
              style={{
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Image
                src={el}
                alt="mini product image"
                width={282}
                height={285}
                style={{ borderRadius: 10 }}
              />
              <h4>Polo with Contrast Trims</h4>
              <p>Sleman, Yogyakarta</p>
            </div>
          ))}
        </div>
      </section>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleToggleModal}
        contentLabel="Edit Image"
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
            transform: "translateX(-50%) translateY(60%)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
            height: 250,
          },
        }}
      >
        <h3>Jumlah</h3>
        <form>
          <TextInput
            register={register}
            label=""
            name="amount"
            placeholder="Pilih jumlah barang yang ingin di klaim"
            type="number"
          />
        </form>
        <Button onClick={handleSubmit(onSubmit)}>Klaim</Button>
      </ReactModal>
    </main>
  );
}
