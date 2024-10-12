import Image from "next/image";

export default function KategoriCard() {
  return (
    <div style={{paddingBottom: 20 }}>
      <Image
        src={"https://picsum.photos/200/300"}
        width={260}
        height={325}
        alt="random img"
        layout="responsive"
        style={{
          borderRadius: 10,
          objectFit: "cover",
          aspectRatio: 260 / 325,
        }}
      />
      <div>
        <span>Cotton</span>
        <h3>Cotton Tote Bag</h3>
        <div>
          <Image src={"./location.svg"} alt="loc" width={16} height={16} />
          <span>Abcd, Bali</span>
        </div>
      </div>
    </div>
  );
}
