import Image from "next/image";
import styles from "./FrameDecoration.module.css";
import ImageFlip from "../ImageFip";

export default function FrameDecoration(props: { imageList?: string[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.firstLayer}>
        <div className={styles.secondLayer}>
          <div className={styles.leavesContainer}>
            <Image
              src={"/leaves-group.svg"}
              alt="leaves-group"
              fill
              className={styles.leaves}
            />
          </div>

          <div className={styles.thirdLayer}>
            <ImageFlip
              className={styles.ilustration}
              images={props?.imageList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
