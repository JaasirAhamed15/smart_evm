"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center h-full bg-[#0f172a] text-center px-6 py-10">
            {/* Lottie Animation */}
            <DotLottieReact
                src="https://lottie.host/51ade38f-75ed-4b0f-8dfa-314a773ae965/F5G4JPGEuk.lottie"
                loop
                autoplay
                className="h-[60vh]"
            />

            

            <button
                onClick={() => router.push("/")}
                className="mt-6 px-6 py-3 bg-[#004aad] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#003080] transition"
            >
                Go Home
            </button>
        </div>
    );
}
