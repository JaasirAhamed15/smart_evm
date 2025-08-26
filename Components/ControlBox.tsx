"use client";

import { useState } from "react";

export default function ControlBox() {
    const [activeLed, setActiveLed] = useState<number | null>(null);

    const handleClick = (i: number) => {
        setActiveLed(i);
        setTimeout(() => setActiveLed(null), 1200);
    };

    return (
        <div className="flex justify-center items-center bg-transparent">
            <div className="relative w-[30vw] aspect-[3/4] bg-sky-400 rounded-xl shadow-xl p-4">
                {/* Blue box screws */}
                <span className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gray-400" />
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gray-400" />

                {/* Yellow Plate */}
                <div className="absolute inset-[5vh] bg-yellow-400 rounded-md shadow-inner flex flex-col justify-center items-center gap-4">
                    {/* Yellow plate screws */}
                    <span className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-400" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-400" />

                    {/* Rows */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="grid grid-cols-[1fr_auto_0px] items-center gap-2">
                            <button
                                onClick={() => handleClick(i)}
                                className="w-[2vw] h-[4vh] rounded-xl bg-black shadow-md active:translate-y-[1px] focus:outline-none"
                                aria-label={`Button ${i + 1}`}
                            />
                            <span
                                className={`w-4 h-4 rounded-full shadow-inner ${activeLed === i
                                        ? "bg-red-600 animate-pulse shadow-[0_0_10px_2px_rgba(41,232,63,0.9)]"
                                        : "bg-gray-400"
                                    }`}
                            />
                        </div>
                    ))}

                    {/* <div className="absolute bottom-2 text-sm text-gray-700">
                        Click a black button – its nearby LED will blink.
                    </div> */}
                </div>
            </div>
        </div>
    );
}
