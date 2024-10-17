"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./BlogList.module.css";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import getDonationCategories from "@/app/api/donation/category";
import Button from "@/components/Button";

type Kategori = {
  id: number;
  parent_id: number;
  title: string;
  created_at: string;
  updated_at: string;
  children: any[];
};

const columnHelper = createColumnHelper<Kategori>();
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
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("title", {
    header: () => "Title",
    cell: (info) => info.renderValue(),
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

export default function KategoriList(props?: {onClickAdd: any}) {
  const qCategories = useQuery({
    queryKey: ["/donation/category"],
    queryFn: getDonationCategories,
  });

  const table = useReactTable({
    data: qCategories?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Kategori List</h3>
        <div>
          <Button onClick={props?.onClickAdd}>Add</Button>
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
