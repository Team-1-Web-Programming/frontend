import { useRef } from 'react';
import Image from 'next/image';
import { throttle } from 'lodash';
import styles from './ZoomImage.module.css';

interface ZoomImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, width = '100%', height = '100%' }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = throttle((e: React.MouseEvent) => {
    const container = imageRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const imageElement = container.querySelector('img');
    if (imageElement) {
      imageElement.style.transformOrigin = `${x}% ${y}%`;
    }
  }, 20);

  return (
    <div 
      className={styles.imageContainer} 
      onMouseMove={handleMouseMove}
      ref={imageRef}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={styles.zoomImage}
      />
    </div>
  );
};

export default ZoomImage;
