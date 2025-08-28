"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";

export default function NewVoteCastPage() {
  const [resetFlag, setResetFlag] = useState(0);
  const [message, setMessage] = useState("");
  const [espId, setEspId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedEspId = sessionStorage.getItem("espId");
    if (!storedEspId) {
      router.push("/login");
      return;
    }
    setEspId(storedEspId);

    const resetRef = ref(db, "/" + storedEspId + "/reset_flag");
    const unsubscribe = onValue(resetRef, (snapshot) => {
      setResetFlag(snapshot.val());
    });

    return () => unsubscribe();
  }, [router]);

  const castVote = async () => {
    if (!espId) return;

    try {
      await set(ref(db, "/" + espId + "/flag"), 1);
      setMessage("Vote has been cast successfully!");
      
      // Clear message after 2 seconds
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      setMessage("Error casting vote: " + err.message);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("espId");
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#004aad]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-[#004aad] mb-6">Cast Vote</h2>

        <button
          onClick={castVote}
          disabled={resetFlag !== 1}
          className={`w-full cursor-pointer p-3 text-lg font-semibold rounded-lg transition
            ${
              resetFlag === 1
                ? "bg-[#fdf212] text-[#004aad] hover:bg-[#004aad] hover:text-[#fdf212]"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          Reset
        </button>

        {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}

        <button
          onClick={logout}
          className="w-full p-3 cursor-pointer text-lg font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
