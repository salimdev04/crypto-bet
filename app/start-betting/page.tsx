"use client";

import { ethers } from "ethers";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import cryptos from "../../data/crypto.json";

export default function StartBetting() {
  const [isOpen, setOpen] = useState(false);

  const handleSelect = (e: any) => {
    console.log("Select...");
    console.log(e.target.value);
  };

  return (
    <main className="">
      <header className="p-8 border">
        <h1 className=" font-bold text-lg text-center">Start Betting</h1>
      </header>
      <div className="my-4 relative">
        <h2 className="text-center">Select your Stack</h2>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="w-[30%] p-4 mx-auto h-[40px] border rounded-[0.5rem] flex justify-between items-center cursor-pointer"
        >
          <p>Select your crypto</p>
          <p>V</p>
        </div>
        {isOpen && (
          <div className="absolute w-[30%] p-4 mx-auto border">
            {cryptos.map((item, i) => (
              <div key={i}>
                <p>{item.crypto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section className="flex mt-[500px] justify-around gap-[4rem] mx-[4rem]">
        <Card className="w-full p-4">
          <CardTitle>Your Stack</CardTitle>
        </Card>

        <Card className="w-full p-4">
          <CardTitle>More Parametters</CardTitle>
        </Card>
      </section>
    </main>
  );
}
