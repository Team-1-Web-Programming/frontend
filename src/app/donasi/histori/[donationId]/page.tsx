"use client"; // Menandai komponen ini sebagai Client Component

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Hook untuk mengambil URL params
import apiClient from "@/services/api";
import { updateDonationProduct } from "@/app/api/user/donation/status"; // Fungsi untuk update status

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
        id: number;
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

type User = {
  id: number;
  name: string;
  photo_profile: string | null;
  email: string;
  email_verified_at: null;
  created_at: string;
  updated_at: string;
};

const fetchUser = async (): Promise<User> => {
  try {
    const response = await apiClient.get('/user');
    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

const fetchDonations = async (donationId: string | string[] | undefined): Promise<Person> => {
  if (!donationId) throw new Error("donationId is required");

  try {
    const response = await apiClient.get(`/user/donation/${donationId}`);
    const data: Person = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching donation data", error);
    throw error;
  }
};

export default function DonasiDetail() {
  const { donationId } = useParams(); // Mengambil donationId dari URL
  const [data, setData] = useState<Person | null>(null); // Inisialisasi state untuk donasi
  const [user, setUser] = useState<User | null>(null); // Inisialisasi state untuk pengguna
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const donationsPromise = fetchDonations(donationId);
        const userPromise = fetchUser();

        const [donations, userData] = await Promise.all([donationsPromise, userPromise]);
        setData(donations);
        setUser(userData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [donationId]);

  const handleUpdateStatus = async (newStatus: string) => {
    if (data && user) {
      const currentUserId = user.id; // Mengambil currentUserId dari data pengguna
      setLoading(true);
      let updatedStatus = "";

      try {
        if (data.status === 'requested') {
          if (data.donor_id === currentUserId) {
            updatedStatus = newStatus === 'confirm' ? 'confirmed' : 'rejected'; // Menangani konfirmasi atau penolakan
          } else if (data.donee_id === currentUserId) {
            updatedStatus = 'canceled'; // Menangani pembatalan oleh donee
          }
        } else if (data.status === 'confirmed' && data.donor_id === currentUserId) {
          updatedStatus = 'taken'; // Menangani status diambil oleh donor
        }

        // Jika status baru ditemukan, kirim permintaan untuk memperbarui status
        if (updatedStatus) {
          await updateDonationProduct({ id: data.id, status: updatedStatus });
          setData({ ...data, status: updatedStatus }); // Memperbarui state lokal dengan status baru
          alert("Status updated successfully!");
        }
      } catch (error) {
        console.error("Error updating donation status", error);
        alert("Failed to update status.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (!data || !user) return <p>Loading...</p>;

  return (
    <div>
      <h3>Donasi Detail</h3>

      {/* Tampilkan informasi pengguna */}
      <h4>User Information</h4>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Profile Photo:</td>
            <td>
              {user.photo_profile ? (
                <img src={user.photo_profile} alt="User" width="100" />
              ) : (
                <p>No profile photo available</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tampilkan informasi donasi */}
      <h4>Donation Details</h4>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Donor Name:</td>
            <td>{data.donor.name}</td>
          </tr>
          <tr>
            <td>Donor Email:</td>
            <td>{data.donor.email}</td>
          </tr>
          <tr>
            <td>Donor Photo:</td>
            <td>
              <img src={data.donor.photo_profile} alt="Donor" width="100" />
            </td>
          </tr>
          <tr>
            <td>Donee Name:</td>
            <td>{data.donee.name}</td>
          </tr>
          <tr>
            <td>Donee Email:</td>
            <td>{data.donee.email}</td>
          </tr>
          <tr>
            <td>Product Title:</td>
            <td>{data.product.title}</td>
          </tr>
          <tr>
            <td>Product Description:</td>
            <td>{data.product.description}</td>
          </tr>
          <tr>
            <td>Donation Amount:</td>
            <td>{data.amount}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{data.status}</td>
          </tr>
          <tr>
            <td>Created At:</td>
            <td>{data.created_at}</td>
          </tr>
          <tr>
            <td>Updated At:</td>
            <td>{data.updated_at}</td>
          </tr>
          <tr>
            <td>Product Media:</td>
            <td>
              {data.product.donation_product_media.map((media) => (
                <div key={media.id}>
                  <p>Title: {media.title}</p>
                  <p>Type: {media.type}</p>
                  <a href={media.url} target="_blank" rel="noopener noreferrer">
                    View Media
                  </a>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tombol untuk mengupdate status */}
      {data.status === 'requested' && data.donor_id === user.id && (
        <>
          <button onClick={() => handleUpdateStatus('confirm')} disabled={loading}>
            {loading ? "Updating..." : "Confirm Donation"}
          </button>
          <button onClick={() => handleUpdateStatus('reject')} disabled={loading}>
            {loading ? "Updating..." : "Reject Donation"}
          </button>
        </>
      )}
      {data.status === 'requested' && data.donee_id === user.id && (
        <button onClick={() => handleUpdateStatus('cancel')} disabled={loading}>
          {loading ? "Updating..." : "Cancel Donation"}
        </button>
      )}
      {data.status === 'confirmed' && data.donor_id === user.id && (
        <button onClick={() => handleUpdateStatus('taken')} disabled={loading}>
          {loading ? "Updating..." : "Take Donation"}
        </button>
      )}
      
      {/* Tampilkan teks status saat ini */}
      <p>Current Status: {data.status}</p>
    </div>
  );
}
