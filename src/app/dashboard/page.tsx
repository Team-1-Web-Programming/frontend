import Row from "@/components/Grid/Row";
import ImageUploader from "../tambah-donasi/image-uploader";
import Col from "@/components/Grid/Col";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Custom / Animasi image di depan</h3>
      <br></br>
      <ImageUploader />
    </div>
  );
}
