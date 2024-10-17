"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ImageFlip.module.css";
import Image from "next/image";

const imgs = [
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
  const modeRef = useRef("back");

  const images = props?.images || imgs

  const handleFlip = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setRotation((prevRotation) => prevRotation + 180);

      if (modeRef.current === "front") {
        setTimeout(() => {
          setBackImage((prevBack) => (prevBack + 2) % images.length);
          modeRef.current = "back";
        }, 300);
      } else if (modeRef.current === "back") {
        setTimeout(() => {
          setFrontImage((prevFront) => (prevFront + 2) % images.length);
          modeRef.current = "front";
        }, 300);
      }

      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  };

  useEffect(() => {
    let flipInterval: NodeJS.Timeout | null = null;

    const startFlipInterval = () => {
      flipInterval = setInterval(() => {
        handleFlip();
      }, 5000);
    };

    const stopFlipInterval = () => {
      if (flipInterval) {
        clearInterval(flipInterval);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopFlipInterval();
      } else {
        startFlipInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    startFlipInterval(); // Start interval when component mounts

    return () => {
      stopFlipInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
            unoptimized
          />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <Image
            src={images[backImage]}
            alt="Back"
            width={360}
            height={530}
            className={props?.className}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
