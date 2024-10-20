import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./PannableImage.module.css";

const PannableImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
    setScrollPosition({
      left: imgContainerRef.current?.scrollLeft || 0,
      top: imgContainerRef.current?.scrollTop || 0,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;

      if (imgContainerRef.current) {
        imgContainerRef.current.scrollLeft = scrollPosition.left - dx;
        imgContainerRef.current.scrollTop = scrollPosition.top - dy;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={imgContainerRef}
      className={styles.pannableContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
      />
    </div>
  );
};

export default PannableImage;
