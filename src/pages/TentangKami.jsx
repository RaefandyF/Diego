import React from "react";
import Header2 from "../component/Header2";
import LogoDiegoTentangKami from "../assets/LogoDiegoTentangKami.png";
import hias1 from "../assets/hias1.png";
import TentangKami2 from "../assets/TentangKami2.png";
import TentangKami3 from "../assets/TentangKami3.png";
import TentangKami4 from "../assets/TentangKami4.png";
import TentangKami5 from "../assets/TentangKami5.png";
import "../css/TentangKami.css";

function TentangKami() {
    
    return(
        <div className="tentang-kami">
            <Header2 />
            <div className="section1 flex">
                <div className="div-left">
                    <h1>Tentang Diego</h1>
                    <h2>Kenapa kita memilih untuk membuat DIEGO</h2>
                    <p>DIEGO (Digital Era Go), sebuah platform berbasis website, dipilih untuk memberikan dukungan digitalisasi kepada UMKM dengan fokus pada pemasaran produk. Dengan tujuan utama untuk memfasilitasi pertumbuhan UMKM.</p>
                </div>
                <div className="div-right">
                    <img className="logo-diego" src={LogoDiegoTentangKami} alt="Logo Diego" />
                </div>
                <img className="hias1" src={hias1} alt="hias 1" />
            </div>

            <div className="section2">
                <img className="section2-img" src={TentangKami2} alt="" />
            </div>

            <div className="section3">
                <img className="section3-img" src={TentangKami3} alt="" />
            </div>

            <div className="section4">
                <img className="section4-img" src={TentangKami4} alt="" />
            </div>

            <div className="section5">
                <img className="section5-img" src={TentangKami5} alt="" />
            </div>
        </div>
    );


}

export default TentangKami;