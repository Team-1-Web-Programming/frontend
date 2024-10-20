import Image from "next/image";
import styles from "./Items.module.css";
import Button from "../Button";
import Link from "next/link";

export default function ItemCard({
  title = "Barang",
  imgSrc = "https://picsum.photos/360/450",
  redirect = "",
}: {
  title?: string;
  imgSrc?: string;
  redirect?: string;
}) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={imgSrc}
        alt="floral-image"
        width={360}
        height={450}
      />
      <h4>{title}</h4>
      <div className={styles.detailsContainer}>
        <div className={styles.leftDetail}>
          <div className={styles.detail}>
            <Image
              className={styles.icon}
              src={"/location.svg"}
              alt="location"
              width={16}
              height={16}
            />
            <span>500m</span>
          </div>
          <div className={styles.detail}>
            <Image
              className={styles.icon}
              src={"/eye.svg"}
              alt="eye"
              width={16}
              height={16}
            />
            <span>1.234</span>
          </div>
        </div>
        <div className={styles.rightDetail}>123 Reviews</div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={redirect}>
          <Button>Klaim</Button>
        </Link>
      </div>
    </div>
  );
}
