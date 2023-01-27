import React from "react";
import Logo from '../../assets/logo.png'
import Image from "next/image";
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { GoMail } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-auto lg:px-16 px-0 lg:py-12 py-4 text-white font-poppins">
            <div className="container mx-auto px-6 lg:px-0 lg:">
                <div className="grid lg:grid-cols-5 lg:gap-x-20 grid-cols-1 lg:gap-y-0 gap-y-8">
                    <div className="col-span-2 lg:text-start text-center">
                        <div className="flex lg:flex-row flex-col items-center lg:space-x-4 space-x-0 lg:justify-start justify-center">
                            <Image src={Logo} width={100} height={100} />
                            <span className="font-bold text-white text-xl">loker.ind</span>
                        </div>
                        <span className="text-xs font-light text-white tracking-tight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid
                        </span>
                        <div className="flex flex-row items-center space-x-2 mt-2 lg:justify-start justify-center">
                            <div className="bg-transparent p-2.5 rounded-full hover:bg-black hover:opacity-75 cursor-pointer">
                                <BsInstagram size={20} />
                            </div>
                            <div className="bg-transparent p-2.5 rounded-full hover:bg-black hover:opacity-75 cursor-pointer">
                                <BsTwitter size={20} />
                            </div>
                            <div className="bg-transparent p-2.5 rounded-full hover:bg-black hover:opacity-75 cursor-pointer">
                                <ImFacebook size={20} />
                            </div>
                            <div className="bg-transparent p-2.5 rounded-full hover:bg-black hover:opacity-75 cursor-pointer">
                                <GoMail size={20} />
                            </div>
                            <div className="bg-transparent p-2.5 rounded-full hover:bg-black hover:opacity-75 cursor-pointer">
                                <FaLinkedinIn size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-0 gap-y-8 justify-between">
                            <div className="flex flex-col space-y-4 ">
                                <span className="text-gray-500 uppercase font-semibold">Loker</span>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-sm font-light tracking-wider">Lokasi Pekerjaan</span>
                                    <span className="text-sm font-light tracking-wider">Nama Perusahaan</span>
                                    <span className="text-sm font-light tracking-wider">Kategori Pekerjaan</span>
                                    <span className="text-sm font-light tracking-wider">Posisi Pekerjaan</span>
                                    <span className="text-sm font-light tracking-wider">Paling Banyak Dicari</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 ">
                                <span className="text-gray-500 uppercase font-semibold">Ikuti Kami</span>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-sm font-light tracking-wider">Lokasi Pekerjaan</span>
                                    <span className="text-sm font-light tracking-wider">Hubungi Kami</span>
                                    <span className="text-sm font-light tracking-wider">FAQ</span>
                                    <span className="text-sm font-light tracking-wider">Kirim Saran</span>
                                    <span className="text-sm font-light tracking-wider">Paling Banyak Dicari</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 "><span className="text-gray-500 uppercase font-semibold">Kontak</span>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-sm font-light tracking-wider">Hubungi Kami</span>
                                    <span className="text-sm font-light tracking-wider">FAQ</span>
                                    <span className="text-sm font-light tracking-wider">Kirim Saran</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-500 lg:mt-2 mt-4"></div>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 pb-2 items-center justify-between mt-4">
                    <span className="text-xs">&copy; 2023 PT. Loker Sejahtera Indonesia</span>
                    <div className="flex flex-row items-center space-x-4">
                        <span className="text-xs cursor-pointer">Syarat dan Ketentuan</span>
                        <span className="text-xs cursor-pointer">Pernyataan Privasi</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
