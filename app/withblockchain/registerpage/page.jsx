"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [espId, setEspId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    console.log(espId+password);
    if (!espId || !password) {
      setError("Please enter both fields");
      return;
    }

    try {
      const response = await fetch("http://103.207.1.87:5821/esp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          espid: espId,
          password: password,
        }),
      });

      const data = await response.json();
      

      if (response.ok) {
        // ✅ Successful login
        console.log("Login Success:", data);
        setError(""); 
        router.push("/dashboard"); // redirect after success
      } else {
        // ❌ Server error (wrong credentials or not registered)
        setError(data.message || "ESP ID does not exist!");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
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

        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
}
