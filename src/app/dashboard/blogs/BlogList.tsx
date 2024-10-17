"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./BlogList.module.css";
import Dropdown from "@/components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import getBlogs from "@/app/api/blogs/blogs";
import dayjs from "dayjs";
import Button from "@/components/Button";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  date: string;
  user_id: number;
  cover_image: string;
  content: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    photo_profile: null;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
};
const columnHelper = createColumnHelper<Blog>();
const statusColor = {
  requested: "orange",
  taken: "var(--primary-green)",
  canceled: "red",
};

const columns = [
  columnHelper.accessor("id", {
    header: "No",
    cell: (info) => info.row.index + 1,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.created_at, {
    id: "created_at",
    cell: (info) => <i>{dayjs(info.getValue()).format("DD MMMM YYYY")}</i>,
    header: () => <span>Date</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("title", {
    header: () => "Donee",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("user.name", {
    header: () => <span>Author</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("cover_image", {
    header: () => <span>Cover Image</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.content, {
    id: "content",
    cell: (info) => (
      <div style={{ maxHeight: 100, overflow: 'hidden', maxWidth: 100 }}>
        {info.getValue()}
      </div>
    ),
    header: () => <span>Content</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => (
      <Dropdown
        trigger="hover"
        overlay={[
          { render: <div style={{ color: "orange" }}>Edit</div> },
          {
            render: <div style={{ color: "red" }}>Hapus</div>,
          },
        ]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            padding: 10,
          }}
        >
          <div
            style={{
              borderRadius: "100%",
              height: 5,
              width: 5,
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              borderRadius: "100%",
              height: 5,
              width: 5,
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              borderRadius: "100%",
              height: 5,
              width: 5,
              backgroundColor: "black",
            }}
          />
        </div>
      </Dropdown>
    ),
    header: () => <span>Action</span>,
    footer: (info) => info.column.id,
  }),
];

export default function BlogList(props?: { onAddClick?: any }) {
  const qBlogs = useQuery({
    queryKey: ["/blogs"],
    queryFn: getBlogs,
  });

  const table = useReactTable({
    data: qBlogs?.data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Blog List</h3>

        <div>
          <Link href={"/dashboard/blogs/add"}>
            <Button>Add Blog</Button>
          </Link>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table &&
              table?.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
