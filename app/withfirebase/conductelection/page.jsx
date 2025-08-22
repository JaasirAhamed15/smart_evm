"use client";

import { useState, useEffect } from "react";
import { ref, get, update } from "firebase/database";
import { db } from "@/lib/firebase";  // ✅ use centralized firebase config

export default function ConductElectionPage() {
  const [espid, setEspid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const userRef = ref(db, espid); // ✅ use imported db
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          sessionStorage.setItem("espid", espid);
          setShowModal(true); // Show reset confirmation modal
        } else {
          setErrorMessage("Incorrect password.");
        }
      } else {
        setErrorMessage("ESP ID not found.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetElection = async () => {
    const storedEspid =
      typeof window !== "undefined" ? sessionStorage.getItem("espid") : null;

    if (!storedEspid) {
      alert("No election ID found. Please log in again.");
      setShowModal(false);
      return;
    }

    const updates = {
      vote_count: "0,0,0,0,0,0,0,0",
      vote_details: "",
    };

    try {
      await update(ref(db, storedEspid), updates); // ✅ db instead of database
      alert("Election has been reset.");
    } catch (error) {
      console.error("Error resetting election:", error);
      alert("Failed to reset election. Check console for details.");
    }

    setShowModal(false);
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#004aad]">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#004aad] mb-6">
          Conduct Election
        </h1>

        <input
          type="text"
          placeholder="Enter ESP ID"
          value={espid}
          onChange={(e) => setEspid(e.target.value)}
          className="p-3 mb-3 w-full text-black border border-[#004aad] rounded-lg text-base"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 mb-3 w-full text-black border border-[#004aad] rounded-lg text-base"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="relative w-full py-3 rounded-lg text-lg font-semibold transition-colors bg-[#fdf212] text-[#004aad] hover:bg-[#004aad] hover:text-[#fdf212]"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-t-[#004aad] border-gray-200 rounded-full animate-spin mx-auto" />
          ) : (
            "Conduct Election"
          )}
        </button>

        {errorMessage && (
          <div className="mt-4 text-red-600 font-medium">{errorMessage}</div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px] text-center">
            <h2 className="text-xl font-bold text-yellow-600 mb-4">Warning!</h2>
            <p className="mb-6 text-black">
              Your election data will be reset permanently! Are you sure to
              proceed?
            </p>
            <div className="flex justify-around">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleResetElection}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Reset Election
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
