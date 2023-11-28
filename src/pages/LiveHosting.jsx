import React from "react";
import Header2 from "../component/Header2";
import "../css/LiveHosting.css";
import LiveHostingDetail from "../assets/LiveHostingDetail.png";

function LiveHosting(props) {

    return (
        <div className="live-hosting">
            <Header2 
               buttonColor={"bg-[#CA5116] text-white " + props.login}
            />
            <div className="section1">
                <img className="foto-utama" src={LiveHostingDetail} alt="foto Live Hosting" />
                <h1>Live Hosting</h1>
                <p>Jasa Live Hosting kami didukung oleh tim ahli yang memiliki pengalaman dan pemahaman mendalam tentang semua aspek teknis, produksi, dan manajemen yang diperlukan untuk menyelenggarakan acara live yang berkualitas.</p>
            </div>
            <div className="section2">
                <div className="flex point-div">
                    <div className="point point1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="50" fill="black" />
                        </svg>
                        <h1>64.200.000</h1>
                        <p>Jumlah UMKM di Indonesia per tahun 2023</p>
                    </div>
                    <div className="point point2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="50" fill="black" />
                        </svg>
                        <h1>76.9%</h1>
                        <p>UMKM yang sudah beralih secara digital</p>
                    </div>
                    <div className="point point3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="50" fill="black" />
                        </svg>
                        <h1>23.1%</h1>
                        <p>UMKM yang belum beralih secara digital</p>
                    </div>
                </div>

                <div className="flex fitur-div">
                    <div className="fitur fitur1 ml-[12vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                            <circle cx="33.3976" cy="33.3699" r="32.6849" fill="#CA5116" />
                        </svg>
                        <p>Konsultasikan bisnismu dengan para ahli</p>
                    </div>
                    <div className="fitur fitur2 ml-[2vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                            <circle cx="33.3976" cy="33.3699" r="32.6849" fill="#CA5116" />
                        </svg>
                        <p>Sampaikan semua pertimbanganmu, kami cari solusinya!</p>
                    </div>
                    <div className="fitur fitur3 ml-[2vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                            <circle cx="33.3976" cy="33.3699" r="32.6849" fill="#CA5116" />
                        </svg>
                        <p>Pantau bisnismu dengan indikator performa kunci (KPI)</p>
                    </div>
                    <div className="fitur fitur4 ml-[2vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                            <circle cx="33.3976" cy="33.3699" r="32.6849" fill="#CA5116" />
                        </svg>
                        <p>Konsultasikan bisnismu dengan para ahli</p>
                    </div>
                </div>
                <h1 className="harga-title">Live Hosting</h1>
                <h2 className="harga"><b>Rp 2.500.000/</b> 30 Jam</h2>
            </div>

            <div className="section3">
                <a href={props.href}>
                    <div className="button-mau">
                        <h1>Saya mau</h1>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default LiveHosting;