"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const formatPath = (path: string) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = "/" + pathArray.slice(0, index + 1).join("/");
          return (
            <li key={href} style={{ marginLeft: "8px" }}>
              <span style={{ margin: "0 8px" }}>/</span>
              {index === pathArray.length - 1 ? (
                <span>{formatPath(path)}</span>
              ) : (
                <Link href={href}>{formatPath(path)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
