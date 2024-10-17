"use client";
import Button from "@/components/Button";
import Image from "next/image";
import BlogsCard from "@/components/Card/BlogsCard";
import RenderHTML from "./RenderHTML";
import styles from "./blog.module.css";
import { withAuth } from "@/helpers/withAuth";
import BlogPostSkeleton from "./BlogSkeleton";
import { useQuery } from "@tanstack/react-query";
import getBlogs from "../api/blogs/blogs";

const Blog: React.FC = (props?: { data?: any }) => {
  const qBlogs = useQuery({
    queryKey: ["/blogs"],
    queryFn: getBlogs,
  });

  const data = props?.data || qBlogs?.data?.data?.[0];

  return (
    <main>
      <header className={styles.blogHeader}>
        <h1 style={{ textAlign: "center" }}>Blog Guna Ulang</h1>
        <h4 style={{ textAlign: "center", color: "var(--primary-green)" }}>
          Temukan tips, inspirasi, dan kisah menarik tentang berbagi barang,
          mengurangi limbah, dan membangun komunitas yang peduli lingkungan.
          Baca artikel terbaru dari Gunaulang di sini.
        </h4>
        <div>
          <Button>Artikel Terbaru</Button>
        </div>
      </header>
      <article className={styles.content}>
        <h1 style={{ textAlign: "center" }}>
          {data?.title || "Mengapa Berbagi Barang Membantu Mengurangi Limbah?"}
        </h1>
        <Image
          src={data?.cover_image || "https://picsum.photos/800/500"}
          width={1152}
          height={491}
          layout="responsive"
          alt="BlogImage"
          style={{ borderRadius: 20 }}
        />
        <div>
          <RenderHTML htmlString={data?.content} />
        </div>
      </article>
      <div>
        <h3 style={{ textAlign: "center" }}>Daftar Artikel Terkini</h3>
      </div>
      <div className={styles.blogItemsContainer}>
        {qBlogs.data?.data?.slice(0, 3)?.map((el: any) => {
          return (
            <BlogsCard
              key={el?.id}
              title={el?.title}
              coverImage={el?.cover_image}
              id={el.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default withAuth(Blog, BlogPostSkeleton);
