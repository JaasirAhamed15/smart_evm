"use client";

import { useState } from "react";

export default function ControlBox() {
    const [activeLed, setActiveLed] = useState<number | null>(null);

    const handleClick = (i: number) => {
        setActiveLed(i);
        setTimeout(() => setActiveLed(null), 1200);
    };

    // Add candidate names (10 for 10 rows)
    const candidates = [
        "Alice",
        "Bob",
        "Charlie",
        "Diana",
        "Ethan",
        "Fiona",
        "George",
        "Hannah",
    ];

    return (
        <div className="hidden lg:flex justify-center items-center bg-transparent">
            <div className="relative w-[30vw] aspect-[3/4] bg-sky-400 rounded-xl shadow-xl p-4">
                {/* Blue box screws */}
                <span className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gray-400" />

                {/* Yellow Plate */}
                <div className="absolute inset-[5vh] bg-yellow-400 rounded-md shadow-inner flex flex-col justify-center items-center gap-4">
                    {/* Yellow plate screws */}
                    {/* <span className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-400" /> */}

                    {/* Rows */}
                    {candidates.map((name, i) => (
                        <div key={i} className="flex flex-row justify-between h-[30px] w-full">
                            {/* Candidate name */}
                            <div className="flex items-center justify-center ml-5  w-[100%]">
                                <span className="text-md font-bold text-gray-800">{name}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3 px-4 py-2 rounded-md  w-[50%]">
                                {/* Button */}
                                <button
                                    onClick={() => handleClick(i)}
                                    className="w-[2vw] h-[4vh] rounded-full bg-black shadow-md active:translate-y-[1px] focus:outline-none cursor-pointer hover:scale-105"
                                    aria-label={`Button for ${name}`}
                                />

                                {/* LED */}
                                <span
                                    className={`w-[1vw] h-[2vh] rounded-full shadow-inner ${activeLed === i
                                        ? "bg-red-600 animate-pulse shadow-red-800 shadow-md"
                                        : "bg-gray-300 shadow-gray-500 hover:bg-green-300"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
