"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Dropzone, { Accept } from "react-dropzone";
import Modal from "react-modal";
import getCroppedImg from "./cropImage";
import styles from "./ImageUpload.module.css";
import Image from "next/image";
import Button from "../Button";

const ImageUpload = (
  props: { children?: any; onCropped: (croppedImage: any) => any } = {
    onCropped(_croppedImage) {},
  }
) => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader?.result);
      setIsModalOpen(true);
    };
  }, []);

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc as any,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      console.log("cropped image", croppedImage);
      return croppedImage
    } catch (e) {
      console.error(e);
    }
  };

  const handleCloseModal = async () => {
    await handleCrop().then(e => props.onCropped(e))
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Image"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        style={{
          overlay: {
            zIndex: 1000, // Ensure modal appears above other content like navbar
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent background
          },
          content: {
            margin: "auto", // Center the modal horizontally
            bottom: "auto", // Prevent from exceeding the screen's height
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)", // Center horizontally
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
