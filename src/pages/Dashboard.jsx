import React , { useState } from "react";
import { namaLengkap } from "./Login";
import { NamaBisnis } from "./Login";
import Header2 from "../component/Header2";
import "../css/Dashboard.css"
import GambarDashboard1 from "../assets/Dashboard1.png";
import FotoConsultation from "../assets/goDigitalConsultation.png";
import FotoGoDigital from "../assets/goDigital.png";
import FotoVideoProduk from "../assets/fotoVideoProduk.png";
import LiveHosting from "../assets/liveHosting.png";
import { use } from "passport";


function Dashboard(props) {

    const [nama, setNama] = useState(namaLengkap);
    const [namaBisnis, setNamaBisnis] = useState(NamaBisnis);

    return(
        <div className="dashboard">
            <Header2 />

            <div className="section1 flex">
                <div className="umkm-info-div">
                    <h1>
                        {nama ? "Halo " + nama : "Halo Raefandy Fadila"}
                    </h1>
                    {/* <p className="nama-umkm">{nama ? nama : "Raefandy Fadila - " + namaBisnis ? namaBisnis : "Beras Gen Z"}</p> */}
                    <p className="deskripsi-umkm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button>Lihat Progress</button>
                </div>
                <div>
                    <img className="gambar-dashboard-1" src={GambarDashboard1} />
                </div>
            </div>

            <div className="h-[70vw] go-digital-consultation-section">
                <h1 className="text-center text-[3.125vw] mt-[5vw]"><b>Fitur </b><u className="underline decoration-[#CA5116]">Layanan</u></h1>
                <div className="flex mt-[4vw]">
                    <img src={FotoConsultation} />
                    <div className="ml-[15vw] mt-[12vw]">
                        <h1 className="text-[2.431vw] font-[600]">Go Digital Consultation</h1>
                        <p className="w-[34.722vw] text-[1.736vw]">Kami menyediakan konsultasi ahli yang berpengalaman di berbagai bidang teknologi dan transformasi digital. Mari bersama-sama menciptakan kehadiran digital yang kuat dan sukseskan bisnis Anda di dunia online.</p>
                        <a href="/go-digital-consultation-log" className="text-black">
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
                        <a href="/jasa-go-digital-log" className="text-black">
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
                        <a href="/live-hosting-log" className="text-black">
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
                        <a href="/foto-video-produk-log" className="text-black">
                            <button className="mt-[2vw] rounded-[4.861vw] bg-[#F1E3CB] w-[20.833vw] h-[4.167vw] text-[2.083vw] font-[500]">Lihat Detail</button>
                        </a>
                    </div>
                    <div className="ml-auto">
                        <img src={FotoVideoProduk} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;