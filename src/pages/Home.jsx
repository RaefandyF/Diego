import React from "react";
// import LogoDiego from "../assets/logoDiego.png";
import Header from "../component/Header";
import "../css/Home.css";
import LogoDiego from "../assets/logoDiego.png";
import FotoConsultation from "../assets/goDigitalConsultation.png";
import FotoGoDigital from "../assets/goDigital.png";
import FotoVideoProduk from "../assets/fotoVideoProduk.png";
import LiveHosting from "../assets/liveHosting.png";

function Home() {
    return(
        <body className="w-[100%] home">
            <div className="h-[100vh] homePage1">
                <Header 
                    buttonColor={'bg-white'}
                />
                <div className="tagline">
                    <h1>Tingkatkan exsposure bisnismu bersama DIEGO.</h1>
                    <p>Digitalisasi UMKM untuk Pertumbuhan yang Lebih Baik</p>
                    <a href="/login">
                        <button className="buttonLogin">Coba Sekarang</button>
                    </a>
                </div>
            </div>

            <div className="h-[70vw] go-digital-consultation-section">
                <h1 className="text-center text-[3.125vw] mt-[5vw]"><b>Fitur </b><u className="underline decoration-[#CA5116]">Layanan</u></h1>
                <div className="flex mt-[4vw]">
                    <img src={FotoConsultation} />
                    <div className="ml-[15vw] mt-[12vw]">
                        <h1 className="text-[2.431vw] font-[600]">Go Digital Consultation</h1>
                        <p className="w-[34.722vw] text-[1.736vw]">Kami menyediakan konsultasi ahli yang berpengalaman di berbagai bidang teknologi dan transformasi digital. Mari bersama-sama menciptakan kehadiran digital yang kuat dan sukseskan bisnis Anda di dunia online.</p>
                        <a href="/go-digital-consultation" className="text-black">
                            <button className="mt-[2vw] rounded-[4.861vw] bg-[#F1E3CB] w-[20.833vw] h-[4.167vw] text-[2.083vw] font-[500]">Lihat Detail</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-[65vw] jasa-go-digital-section">
                <div className="flex">
                    <div className="ml-[5vw] mt-[15vw]">
                        <h1 className="text-[2.431vw] font-[600]">Jasa Go Digital</h1>
                        <p className="w-[34.722vw] text-[1.736vw]">Jasa Go Digital kami adalah langkah besar menuju kesuksesan bisnis Anda dalam era digital yang terus berkembang.</p>
                        <a href="/jasa-go-digital" className="text-black">
                            <button className="mt-[2vw] rounded-[4.861vw] bg-[#F1E3CB] w-[20.833vw] h-[4.167vw] text-[2.083vw] font-[500]">Lihat Detail</button>
                        </a>
                    </div>
                    <div className="ml-auto">
                        <img src={FotoGoDigital} />
                    </div>
                </div>
            </div>

            <div className="h-[62vw] live-hosting-section">
                <div className="flex">
                    <img className="ml-[-10vw]" src={LiveHosting} />
                    <div className="ml-[15vw] mt-[10vw]">
                        <h1 className="text-[2.431vw] font-[600]">Live Hosting</h1>
                        <p className="w-[34.722vw] text-[1.736vw]">Jasa Live Hosting kami didukung oleh tim ahli yang memiliki pengalaman dan pemahaman mendalam tentang semua aspek teknis, produksi, dan manajemen yang diperlukan untuk menyelenggarakan acara live yang berkualitas.</p>
                        <a href="/live-hosting" className="text-black">
                            <button className="mt-[2vw] rounded-[4.861vw] bg-[#F1E3CB] w-[20.833vw] h-[4.167vw] text-[2.083vw] font-[500]">Lihat Detail</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-[50vw] foto-video-produk-section">
                <div className="flex">
                    <div className="ml-[5vw] mt-[15vw]">
                        <h1 className="text-[2.431vw] font-[600]">Foto dan Video Produk</h1>
                        <p className="w-[34.722vw] text-[1.736vw]">Kami juga menyediakan jasa foto dan video produk yang dibuat semenarik mungkin dan berkualitas tinggi.</p>
                        <a href="/foto-video-produk" className="text-black">
                            <button className="mt-[2vw] rounded-[4.861vw] bg-[#F1E3CB] w-[20.833vw] h-[4.167vw] text-[2.083vw] font-[500]">Lihat Detail</button>
                        </a>
                    </div>
                    <div className="ml-auto">
                        <img src={FotoVideoProduk} />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home;