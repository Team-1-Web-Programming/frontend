"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Dropzone, { Accept } from "react-dropzone";
import Modal from "react-modal";
import getCroppedImg from "./cropImage";
import styles from "./ImageUpload.module.css";
import Image from "next/image";
import Button from "../Button";
import { toast } from "react-toastify";

const MAX_FILE_SIZE_MB = 1;
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

const ImageUpload = (
  props: {
    children?: any;
    onCropped?: ({
      croppedImage,
      croppedBlob,
    }: {
      croppedImage?: string;
      croppedBlob?: Blob;
    }) => any;
  } = {
    onCropped(_croppedImage) {},
  }
) => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [croppedBlob, setCroppedBlob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    const file = acceptedFiles[0];

    const isFileSizeValid = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;
    const isFileTypeValid = ALLOWED_TYPES.includes(file.type);

    if (!isFileSizeValid) {
      toast.error("File size exceeds the 1MB limit.");
      return;
    }

    if (!isFileTypeValid) {
      toast.error("Invalid file type. Only JPEG and PNG are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
      setIsModalOpen(true);
    };
  }, []);

  const handleCrop = async () => {
    try {
      const croppedBlob = (await getCroppedImg(
        imageSrc as any,
        croppedAreaPixels,
        rotation
      )) as Blob;
      if (croppedBlob) {
        const croppedImage = URL.createObjectURL(croppedBlob as Blob);
        setCroppedImage(croppedImage);
        setCroppedBlob(croppedBlob);
        console.log("cropped image", croppedImage);
        return { croppedBlob, croppedImage };
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCloseModal = async () => {
    await handleCrop().then((e: any) => props?.onCropped?.(e));
    setCroppedImage(null);
    setCroppedBlob(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Dropzone
        onDrop={onDrop}
        accept={"image/*" as unknown as Accept}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) =>
          props?.children ? (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {props?.children}
            </div>
          ) : (
            <div {...getRootProps()} className={styles.dropzone}>
              <input {...getInputProps()} />
              <p>Drag & drop an image here, or click to select one</p>
            </div>
          )
        }
      </Dropzone>
      <p>
        <span style={{ color: "red" }}>*</span>Ukuran maximum file:{" "}
        {MAX_FILE_SIZE_MB}MB
      </p>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
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
        <div className={styles.cropContainer}>
          {imageSrc && (
            <Cropper
              image={imageSrc as string}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          )}
        </div>

        <div className={styles.controls}>
          {imageSrc && (
            <>
              <label htmlFor="zoom">Zoom</label>
              <input
                type="range"
                id="zoom"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(e.target.value as unknown as number)}
                className={styles.slider}
              />
              <label htmlFor="rotation">Rotation</label>
              <input
                type="range"
                id="rotation"
                min={0}
                max={360}
                step={1}
                value={rotation}
                onChange={(e) =>
                  setRotation(e.target.value as unknown as number)
                }
                className={styles.slider}
              />
              <button onClick={handleCrop} className={styles.cropButton}>
                Crop Image
              </button>
              {croppedImage && (
                <div>
                  <Image
                    src={croppedImage}
                    alt="any"
                    width={200}
                    height={200}
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              )}
              <div className={styles.controls}>
                <Button onClick={handleCloseModal}>Save</Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageUpload;
