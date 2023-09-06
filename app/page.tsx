"use client";

import { ethers } from "ethers";
import Image from "next/image";

export default function Home() {
  const connexion = async () => {
    console.log("connect metamask");
    //@ts-ignore
    const provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const myAddress = (await signer).getAddress();
    console.log(myAddress);
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
