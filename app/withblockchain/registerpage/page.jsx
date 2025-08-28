"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [espId, setEspId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  // ✅ Password validation rules
  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters long.";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter.";
    if (!/[0-9]/.test(pwd)) return "Password must contain at least one number.";
    return "";
  };

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    // Empty field validation
    if (!espId || !password || !confirmpassword) {
      setError("All fields are required.");
      return;
    }

    // Password validation
    const pwdError = validatePassword(password);
    if (pwdError) {
      setError(pwdError);
      return;
    }

    // Confirm password check
    if (confirmpassword !== password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://103.207.1.87:5821/esp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          espId: espId,
          password: password,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (response.ok) {
        console.log("✅ Registration Success:", data);
        setSuccess("Registration successful! Redirecting...");
        setError("");

        setTimeout(() => {
          router.push("/dashboard");
        }, 1500); // wait 1.5s before redirect
      } else {
        setError(data.message || "ESP ID already registered!");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#004aad]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#004aad] mb-6">
          Register Smart EVM (Blockchain)
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          className="w-full text-black p-3 mb-4 border border-[#004aad] rounded-lg text-lg"
        />

        <button
          onClick={handleRegister}
          className="w-full cursor-pointer p-3 text-lg font-semibold bg-[#fdf212] text-[#004aad] rounded-lg hover:bg-[#004aad] hover:text-[#fdf212] transition"
        >
          Register
        </button>
        <button className="bg-gradient-to-r mt-10 from-violet-700 to-blue-500 rounded-2xl w-full py-3 text-lg font-semibold" onClick={()=>{router.back()}}>back</button>


        {error && <p className="mt-4 text-red-600">{error}</p>}
        {success && <p className="mt-4 text-green-600">{success}</p>}
      </div>
    </div>
  );
}
