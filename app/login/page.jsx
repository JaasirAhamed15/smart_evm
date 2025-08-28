// app/login/page.jsx  (if using Next.js App Router)
"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["400", "500", "600", "700"] });

export default function LoginOptions() {
  return (
    <div className={`${montserrat.className} min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4`}>
      {/* Header */}
      <div className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Login Method</h1>
        <p className="text-gray-300">
          Select your preferred authentication method to access the SMART EVM platform securely
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Blockchain Login */}
        <div className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-blue-500 p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600">
              <span className="text-2xl">🔗</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Login with Blockchain</h2>
          <p className="text-gray-400 text-center mb-6">
            Secure, decentralized authentication using Web3 wallet integration. Connect with MetaMask,
            WalletConnect, or other supported wallets.
          </p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Decentralized Security
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Highly Secured
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Immutable Records
            </li>
          </ul>
          <div className="text-center">
            <Link href="withblockchain">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium hover:cursor-pointer">
                BlockChain
              </button>
            </Link>
          </div>
        </div>

        {/* Firebase Login */}
        <div className="bg-[#1e293b] rounded-2xl hover:shadow-lg shadow-orange-500 p-8 border border-gray-700 hover:border-orange-500 transition">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Login without Blockchain</h2>
          <p className="text-gray-400 text-center mb-6">
            Traditional authentication with Google Firebase. Supports email/password, Google, Facebook,
            and other social login methods.
          </p>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span> Multiple Login Options
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span> Easy Account Recovery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400">✔</span> Familiar Interface
            </li>
          </ul>
          <div className="text-center">
            <Link href="withfirebase">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-medium hover:cursor-pointer">
                Without Blockchain
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-gray-400 text-sm text-center">
        Both methods provide secure access to the SMART EVM platform. Choose based on your preference
        and security requirements.
      </div>
    </div>
  );
}
