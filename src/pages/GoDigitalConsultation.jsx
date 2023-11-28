import React from "react";
import Header2 from "../component/Header2";
import "../css/GoDigitalConsultationDetail.css";
import GoDigitalConsultationDetail from "../assets/GoDigitalConsultationDetail.png";

function GoDigitalDetail(props) {

    return (
        <div className="go-digital-consultation">
            <Header2
               buttonColor={"bg-[#CA5116] text-white " + props.login}
            />
            <div className="section1">
                <img className="foto-utama" src={GoDigitalConsultationDetail} alt="foto go digital consultation" />
                <h1>Go-Digital Consultation</h1>
                <p>Layanan konsultasi dan bimbingan untuk membantu bisnis Anda dalam menghadapi era digital dengan percaya diri. Anda akan diberikan panduan dan solusi yang disesuaikan dengan kebutuhan bisnis Anda, seperti lini penjualan digital, tren yang berkaitan dengan bisnis Anda, hingga KPI.</p>
            </div>
            <div className="section2">
                <div className="flex point-div">
                    <div className="point point1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="50" fill="black" />
                        </svg>
                        <h1>64.200.000</h1>
                        <p>Jumlah UMKM di Indonesiaper tahun 2023</p>
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

                <h1 className="harga-title">Harga Go Digital Consultation</h1>
                <h2 className="harga"><b>Rp 9.900.000/</b> Tahun</h2>
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

export default GoDigitalDetail;