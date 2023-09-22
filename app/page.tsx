"use client";

import { ethers } from "ethers";
import Image from "next/image";
import { useState } from "react";
import { CONTRACT_ADDRESS } from "../utils/constant";
import contract_abi from "../contract/abis/GetUUserAdress.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const [address, setAdress] = useState("");
  const [userSigner, setSigner] = useState();
  const router = useRouter();

  const connexion = async () => {
    console.log("connect metamask");
    //@ts-ignore
    const provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    //@ts-ignore
    setSigner(signer);
    signer.getAddress().then((res) => {
      setAdress(res);
      console.log(res);
      router.push("/start-betting");
    });
  };

  const sendUserAddress = async () => {
    console.log("usser signer: ", userSigner);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS.GET_USER_ADDRESS!,
      contract_abi,
      userSigner
    );

    contract
      .setUserAdress(address)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

      <section>
        <h3>User Adress: {address}</h3>

        <button onClick={() => sendUserAddress()}>Send Address</button>
      </section>
    </main>
  );
}
