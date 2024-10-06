import ItemCard from "@/components/Items";

export default function Kategori() {
  return (
    <div>
      <h1>Barang & Makanan di Guna Ulang</h1>
      <p>
        Temukan berbagai kategori barang yang tersedia di Guna Ulang. Pilih
        kategori untuk menemukan barang yang paling sesuai dengan kebutuhanmu
        atau barang yang ingin kamu donasikan.
      </p>
      <input placeholder="Cari barang" />
      <h2>Di Sekitar Kamu</h2>
      <div style={{ display: "flex" }}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <h2>Kategori</h2>
    </div>
  );
}
