"use client";

import { ethers } from "ethers";
import Image from "next/image";

export default function Home() {
  const connexion = () => {
    console.log("connect metamask");
  };

  return (
    <main className="">
      <header className="flex justify-between p-8 border">
        <h1 className=" font-bold text-lg">Crypto Bet</h1>
        <h1 className=" font-bold text-lg">Crypto Fantasy</h1>
        <button onClick={() => connexion()} className="p-2 border ">
          Get Started
        </button>
      </header>
    </main>
  );
}
