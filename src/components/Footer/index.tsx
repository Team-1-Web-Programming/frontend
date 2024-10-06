import Image from "next/image";
import styles from "./Footer.module.css";
import LogoWhite from "../Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoWhite />
      <div className={styles.infoContainer}>
        <div className={styles.featInfoContainer} style={{ flex: 1 }}>
          <h4>Pages</h4>
          <div style={{display: 'flex', gap: 30}}>
            <Link href={'/'}>Home</Link>
            <Link href={'/donasi'}>Donasi</Link>
            <Link href={'/kategori'}>Kategori</Link>
            <Link href={'/blog'}>Blog</Link>
          </div>
          <div style={{display: 'flex', gap: 30}}>
            <Image src={"/fb.svg"} alt="fb" width={24} height={24} />
            <Image src={"/ig.svg"} alt="ig" width={24} height={24} />
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              width={24}
              height={24}
            />
            <Image src={"/twitter.svg"} alt="twitter" width={24} height={24} />
          </div>
          <div>
            <p>terms & services</p>
            <p>Guna Ulang @ all right reserved 2024</p>
          </div>
        </div>
        <div className={styles.contactInfoContainer} style={{ flex: 1 }}>
          <h4>Contact Us</h4>
          <div>
            <Image src={"/phone.svg"} alt="phone" width={24} height={24} />
            <span>+62 123456789</span>
            <Image src={"/mail.svg"} alt="mail" width={24} height={24} />
            <span>info@gunaulang.com</span>
            <Image src={"/location-white.svg"} alt="address" width={24} height={24} />
            <span>123-Satu, Jalan Dua Kota Tiga, Indonesia, 12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
