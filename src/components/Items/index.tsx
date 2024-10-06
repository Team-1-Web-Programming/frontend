import Image from "next/image";
import styles from "./Items.module.css";
import Button from "../Button";

export default function ItemCard() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={"/floral-image.png"}
        alt="floral-image"
        width={360}
        height={450}
      />
      <h4>Bread</h4>
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
        <Button>Klaim</Button>
      </div>
    </div>
  );
}
