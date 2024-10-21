"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./DonasiList.module.css";
import { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown";
import apiClient from "@/services/api";
import Link from "next/link";

type Person = {
  id: number;
  donor_id: number;
  donee_id: number;
  donation_product_id: number;
  amount: number;
  status: string;
  created_at: string;
  updated_at: string;
  donor: {
    id: number;
    name: string;
    photo_profile: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
  donee: {
    id: number;
    name: string;
    photo_profile: null;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
  product: {
    id: number;
    user_id: number;
    address_id: number;
    title: string;
    description: string;
    amount: number;
    created_at: string;
    updated_at: string;
    donation_product_media: [
      {
        id: 8;
        donation_product_id: number;
        title: string;
        type: string;
        url: string;
        created_at: string;
        updated_at: string;
      },
      {
        id: 9;
        donation_product_id: number;
        title: string;
        type: string;
        url: string;
        created_at: string;
        updated_at: string;
      }
    ];
  };
};

const defaultData: Person[] = [];

const fetchDonations = async (): Promise<Person[]> => {
  try {
    const response = await apiClient.get('/user/donation');
    const data: Person[] = response.data;
    defaultData.push(...data);
    return data;
  } catch (error) {
    console.error('Error fetching donation data', error);
    throw error;
  }
}

const columnHelper = createColumnHelper<Person>();
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
  columnHelper.accessor((row) => row.created_at, {
    id: "created_at",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Date</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("donee.name", {
    header: () => "Donee",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("product.address_id", {
    header: () => <span>Location</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("amount", {
    header: () => <span>Amount</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => (
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div
          style={{
            borderRadius: "100%",
            height: 8,
            width: 8,
            backgroundColor:
              statusColor?.[
                info.getValue() as "requested" | "canceled" | "taken"
              ],
          }}
        />
        <i>{info.getValue()}</i>
      </div>
    ),
    header: () => <span>Status</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => (
      <Dropdown
        trigger="hover"
        overlay={[
          { render: <Link href={`/donasi/histori/${info.getValue()}`} style={{ color: "orange" }}>Edit</Link> },
          {
            render: <Link href="" style={{ color: "red" }}>Hapus</Link>,
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

export default function DonasiList() {
  const [data, _setData] = useState(() => [...defaultData]);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const donations = await fetchDonations();
        _setData(donations);
      } catch (error) {
        console.error("Error loading donations:", error);
      }
    };

    loadDonations();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Donasi List</h3>

        <div>
          <select>
            <option>Monthly</option>
          </select>
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
      </div>
    </div>
  );
}
