"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
// import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [espId, setEspId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const userRef = ref(db, espId);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          sessionStorage.setItem("espid", espId);
          router.push("/withfirebase/resetpage/reset"); // ✅ Next.js navigation
        } else {
          setErrorMessage("Incorrect password.");
        }
      } else {
        setErrorMessage("ESP ID not found.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#004aad]">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#004aad] mb-6">Login to Smart EVM</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter ESP ID"
            value={espId}
            onChange={(e) => setEspId(e.target.value)}
            required
            className="w-full p-3 text-black border border-[#004aad] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 text-black border border-[#004aad] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
          />

          <button
            type="submit"
            disabled={loading}
            className="relative cursor-pointer w-full py-3 text-lg font-semibold bg-[#fdf212] text-[#004aad] rounded-lg hover:bg-[#004aad] hover:text-[#fdf212] transition disabled:opacity-50"
          >
            
            {loading ? (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-6 h-6 border-4 border-white border-t-[#004aad] rounded-full animate-spin"></span>
              </span>
            ) : (
              "Login"
            )}
          </button>
          <button className="cursor-pointer bg-gradient-to-r from-violet-700 to-blue-500 rounded-2xl w-full py-3 text-lg font-semibold" onClick={()=>{router.back()}}>back</button>
        </form>

        {errorMessage && (
          <p className="mt-4 text-red-600">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
