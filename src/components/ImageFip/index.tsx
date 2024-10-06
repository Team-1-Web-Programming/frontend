"use client";
import { useEffect, useState } from "react";
import styles from "./ImageFlip.module.css";
import Image from "next/image";

const images = [
  "https://w7.pngwing.com/pngs/682/981/png-transparent-number-1-miscellaneous-rectangle-number-thumbnail.png",
  "https://w7.pngwing.com/pngs/604/843/png-transparent-number-parity-building-2-miscellaneous-angle-building.png",
  "https://w7.pngwing.com/pngs/1004/858/png-transparent-number-3-text-logo-number-thumbnail.png",
  "https://i.pinimg.com/1200x/2c/94/7b/2c947bcaf6ca4b1c37f44f9cff180d01.jpg",
];

export default function ImageFlip(props?: any) {
  const [frontImage, setFrontImage] = useState(0);
  const [backImage, setBackImage] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [mode, setMode] = useState(0);

  const handleFlip = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setMode((prev) => prev + 1);
      setRotation((prevRotation) => prevRotation + 180);
      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (mode < 2) return;
    if (mode % 2 === 0) {
      // back visible
      setFrontImage((prevFront) => (prevFront + 2) % images.length);
    } else {
      // front visible
      setBackImage((prevBack) => (prevBack + 2) % images.length);
    }
  }, [mode]);

  return (
    <div className={styles.scene} onClick={handleFlip}>
      <div
        className={styles.card}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className={`${styles.face} ${styles.front}`}>
          <Image
            src={images[frontImage]}
            alt="Front"
            width={360}
            height={530}
            className={props?.className}
          />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <Image src={images[backImage]} alt="Back" width={360} height={530} />
        </div>
      </div>
    </div>
  );
}
