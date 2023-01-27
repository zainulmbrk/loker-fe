import React, { useState } from "react";
import { MagnifyingGlassIcon, MapPinIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const Search = () => {
    const [daerah, setDaerah] = useState("");
    const [spesialisasi, setSpesialisasi] = useState("");
    const router = useRouter()
    return (
        <div className={`w-full bg-violet-700 shadow-md mt-16 space-y-4 ${router.pathname === '/loker' ? 'py-8' : 'py-20'}`}>
            <div className="flex lg:px-28 px-0 lg:justify-start justify-center text-center font-semibold text-md text-white">
                {router.pathname === 'loker' ? <span>Temukan pekerjaan impianmu sekarang juga</span> : ''}
            </div>
            <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:px-28 px-16 lg:space-y-0 space-y-2 items-center w-full">
                <div className="flex flex-row space-x-2 items-center bg-gray-200 p-2 w-full border-2 border-cyan-500 rounded outline-none">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <input className="bg-transparent w-full border-none outline-none"
                        type="text"
                        placeholder="Jabatan, posisi, perusahaan" />
                </div>
                <div className="flex flex-row space-x-2 items-center bg-gray-200 p-2 w-full border-2 border-cyan-500 rounded outline-none">
                    <MapPinIcon className="w-5 h-5" />
                    <input className="bg-transparent w-full border-none outline-none"
                        type="text"
                        placeholder="Lokasi perusahaan" />
                </div>
                <div className="flex flex-row space-x-2 items-center bg-gray-200 p-2 w-full border-2 border-cyan-500 rounded outline-none">
                    <Cog8ToothIcon className="w-5 h-5" />
                    <input className="bg-transparent w-full border-none outline-none"
                        type="text"
                        placeholder="Spesialisasi" />
                </div>
                <button className="bg-amber-300 lg:w-1/4 w-full hover:bg-amber-400 rounded text-white font-bold py-2 px-6">Cari</button>

            </div>
        </div>
    );
};

export default Search;
