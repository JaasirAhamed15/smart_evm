"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { ref, get } from "firebase/database";
import { Router } from "next/navigation";
export default function LoginPage() {
  const [espId, setEspId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleLogin = async () => {
    if (!espId || !password) {
      setError("Please enter both fields");
      return;
    }

    try {
      const snapshot = await get(ref(db, "/" + espId));

      if (snapshot.exists()) {
        const data = snapshot.val();
        if (password === data.password) {
          sessionStorage.setItem("espId", espId);
          router.push("newvotecastpage");
        } else {
          setError("Incorrect password!");
        }
      } else {
        setError("ESP ID does not exist!");
      }
    } catch (err) {
      console.error("Firebase error:", err);
      setError("Error connecting to server!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#004aad]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#004aad] mb-6">
          Login to Smart EVM (Blockchain)
        </h1>

        <input
          type="text"
          placeholder="EVM Serial No"
          value={espId}
          onChange={(e) => setEspId(e.target.value)}
          className="w-full p-3 text-black mb-4 border border-[#004aad] rounded-lg text-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-black p-3 mb-4 border border-[#004aad] rounded-lg text-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full p-3 text-lg font-semibold bg-[#fdf212] text-[#004aad] rounded-lg hover:bg-[#004aad] hover:text-[#fdf212] transition"
        >
          Login
        </button>
        <button className="bg-gradient-to-r mt-10 from-violet-700 to-blue-500 rounded-2xl w-full py-3 text-lg font-semibold" onClick={()=>{router.back()}}>back</button>


        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
}
