"use client";

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { constants } from "buffer";

export default function SetVotingFlagPage() {
  const [resetFlag, setResetFlag] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const espid =
    typeof window !== "undefined" ? sessionStorage.getItem("espid") : null;

  const flagUrl = `/${espid}/flag`;
  const resetFlagUrl = `/${espid}/reset_flag`;

  const handleSetFlag = async () => {
    if (!espid) {
      setErrorMessage("ESP ID not found in session. Please login again.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      if (resetFlag === 1) {
        await set(ref(db, flagUrl), 1);
        setSuccessMessage("Vote casted successfully!");
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        setErrorMessage("Vote is not selected yet!");
        setTimeout(() => setErrorMessage(null), 4000);
      }
    } catch (error) {
      console.error("Error setting flag:", error);
      setErrorMessage("An error occurred while casting your vote.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!espid) return;
    const resetFlagRef = ref(db, resetFlagUrl);

    const unsubscribe = onValue(resetFlagRef, (snapshot) => {
      setResetFlag(snapshot.val() || 0);
    });

    return () => unsubscribe();
  }, [espid]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#004aad]">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#004aad] mb-6">Cast Vote</h1>

        <button
          onClick={handleSetFlag}
          disabled={loading}
          className={`relative w-full py-3 rounded-lg text-lg font-semibold transition-colors ${
            resetFlag === 1
              ? "bg-[#fdf212] text-[#004aad] hover:bg-[#004aad] hover:text-[#fdf212]"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-t-[#004aad] border-gray-200 rounded-full animate-spin mx-auto" />
          ) : (
            "Reset"
          )}
        </button>
        <button className="bg-gradient-to-r mt-5 from-violet-700 to-blue-500 rounded-2xl w-full py-3 text-lg font-semibold" onClick={()=>{router.back()}}>back</button>


        {errorMessage && (
          <div className="mt-4 text-red-600 font-medium">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="mt-4 text-green-600 font-medium">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}
