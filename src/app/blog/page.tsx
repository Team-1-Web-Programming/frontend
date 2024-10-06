import Button from "@/components/Button";
import Image from "next/image";
import homeStyles from '../page.module.css'
import ItemCard from "@/components/Items";
import BlogsCard from "@/components/Card/BlogsCard";

export default function Blog() {
  return (
    <div>
      <h1>Blog Guna Ulang</h1>
      <h4>
        Temukan tips, inspirasi, dan kisah menarik tentang berbagi barang,
        mengurangi limbah, dan membangun komunitas yang peduli lingkungan. Baca
        artikel terbaru dari Gunaulang di sini.
      </h4>
      <Button>Artikel Terbaru</Button>
      <h3>Mengapa Berbagi Barang Membantu Mengurangi Limbah?</h3>
      <Image
        src={"https://picsum.photos/200/300"}
        width={1152}
        height={491}
        alt="BlogImage"
      />
      <p>
        Setiap tahun, jutaan ton barang-barang layak pakai berakhir di tempat
        pembuangan sampah, berkontribusi pada peningkatan limbah dan pencemaran
        lingkungan. Salah satu cara untuk mengurangi masalah ini adalah dengan
        berbagi barang-barang yang tidak lagi kita butuhkan dengan orang lain.
        Gunaulang hadir sebagai solusi sederhana dan efektif untuk mengatasi
        masalah ini. Apa Itu Limbah Konsumsi Berlebih? Limbah konsumsi berlebih
        terjadi ketika barang-barang yang sebenarnya masih dapat digunakan
        dibuang begitu saja karena dianggap tidak lagi berguna. Hal ini tidak
        hanya meningkatkan jumlah sampah, tetapi juga mempercepat penggunaan
        sumber daya alam yang terbatas. Menurut data dari Kementerian Lingkungan
        Hidup, barang-barang seperti pakaian, perabotan, dan elektronik menjadi
        penyumbang limbah terbesar di Indonesia. Banyak dari barang-barang ini
        sebenarnya masih bisa dimanfaatkan oleh orang lain. Bagaimana Berbagi
        Barang Dapat Membantu? Dengan mendonasikan barang yang tidak terpakai
        melalui Gunaulang, Anda tidak hanya membantu orang lain, tetapi juga
        berperan dalam mengurangi limbah. Setiap barang yang dibagikan adalah
        satu barang yang tidak berakhir di tempat pembuangan sampah. Beberapa
        manfaat berbagi barang: Mengurangi Sampah: Barang yang masih layak pakai
        tidak perlu dibuang. Mengurangi Jejak Karbon: Dengan memperpanjang masa
        pakai barang, Anda turut mengurangi produksi barang baru dan penggunaan
        sumber daya alam. Membantu Komunitas: Barang-barang yang tidak lagi Anda
        butuhkan mungkin sangat berguna bagi orang lain yang membutuhkan. Kisah
        Sukses: Dari Barang Tak Terpakai Menjadi Berkah Banyak pengguna
        Gunaulang yang berhasil mengubah barang tak terpakai mereka menjadi
        berkah bagi orang lain. Misalnya, seorang pengguna bernama Dina berhasil
        mendonasikan perabotan lamanya kepada keluarga muda yang baru pindah
        rumah. Dengan ini, Dina tidak hanya membersihkan ruang di rumahnya,
        tetapi juga membantu orang lain memulai kehidupan baru. Langkah Mudah
        untuk Berbagi di Gunaulang Daftar Akun: Buat akun di Gunaulang dan isi
        data diri Anda. Upload Barang: Ambil foto barang yang ingin Anda
        donasikan dan tuliskan deskripsi singkat. Atur Lokasi: Pilih lokasi di
        mana penerima bisa mengambil barang Anda. Selesai! Barang Anda siap
        untuk diambil oleh orang yang membutuhkan. Kesimpulan Berbagi barang
        melalui Gunaulang adalah langkah kecil yang bisa memberikan dampak
        besar. Dengan bersama-sama, kita bisa mengurangi limbah, menghemat
        sumber daya, dan membantu mereka yang membutuhkan. Mari mulai berbagi
        sekarang dan dukung gerakan Zero Waste!
      </p>
      <div>
        <h3>Daftar Artikel Terkini</h3>
      </div>
      <div className={homeStyles.itemsContainer}>
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </div>
  );
}
