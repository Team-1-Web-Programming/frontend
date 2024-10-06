'use client'
import Image from "next/image";
import DonasiAnalisisChart from "./LineChart";
import DoughnutChart from "./Doughnut";

export default function Donasi() {
  return (
    <div>
      <h1>Donasi</h1>
      <div>
        <div>
          <h4>Total Donasi</h4>
          <h4>455</h4>
          <p>Total Product</p>
          <Image src={"/up.svg"} alt="up" width={20} height={20} />
          <span>10.2</span>
          <span>+1.01% this week</span>
        </div>
        <div>
          <h4>Total Donasi</h4>
          <h4>455</h4>
          <p>Total Product</p>
          <Image src={"/up.svg"} alt="up" width={20} height={20} />
          <span>10.2</span>
          <span>+1.01% this week</span>
        </div>
        <div>
          <h4>Total Donasi</h4>
          <h4>455</h4>
          <p>Total Product</p>
          <Image src={"/up.svg"} alt="up" width={20} height={20} />
          <span>10.2</span>
          <span>+1.01% this week</span>
        </div> 
      </div>
      <DonasiAnalisisChart />
      <DoughnutChart />
    </div>
  );
}
