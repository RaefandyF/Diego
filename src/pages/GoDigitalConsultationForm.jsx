import React from "react";
import { useState } from "react";
import Header2 from "../component/Header2";
import GoDigitalConsultationForm1 from "../assets/GoDigitalConsultationForm1.png";
import "../css/GoDigitalConsultationForm.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GoDigitalConsultationForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="go-digital-consultation-form">
            <Header2 />

            <div className="section1">
                <img className="section1-img" src={GoDigitalConsultationForm1} />
            </div>

            <div className="section2 flex">
                <div>
                    <h1 className="nomor">
                        #1
                    </h1>
                    <h1 className="judul-nomor">
                        Informasi Umum
                    </h1>

                    <div className="input-data">
                        <label for="namaUsaha" >Nama Usaha</label><br />
                        <input name="namaUsaha" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="email" >Email (Untuk Invoice)</label><br />
                        <input name="email" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="bidangUsaha" >Bidang Usaha</label><br />
                        <input name="bidangUsaha" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="jumlahKaryawan" >Jumlah Karyawan yang Dimiliki Saat Ini (Termasuk Pemilik)</label><br />
                        <input name="jumlahKaryawan" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="pendapatanBulan" >Kisaran Pendapatan per Bulan</label><br />
                        <input name="pendapatanBulan" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="mediaSosial" >Akun Media Sosial yang Aktif (Jika Ada)</label><br />
                        <input name="mediaSosial" type="text" />
                    </div>
                </div>
                <div className="section2-right">
                    <h1 className="nomor">
                        #2
                    </h1>
                    <h1 className="judul-nomor">
                        Deskripsikan Usahamu
                    </h1>

                    <div className="input-data">
                        <label for="mediaSosial" >Jelaskan secara singkat kegiatan yang usaha Anda lakukan</label><br />
                        <input name="mediaSosial" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="mediaSosial" >Jelaskan secara singkat keunggulan dari usaha Anda</label><br />
                        <input name="mediaSosial" type="text" />
                    </div>

                    <div className="input-data">
                        <label for="mediaSosial" >Jelaskan secara singkat kekhawatiran Anda terhadap apa yang terjadi pada bisnis Anda di masa kini atau masa depan</label><br />
                        <input name="mediaSosial" type="text" />
                    </div>
                </div>
            </div>

            <div className="section3">
                    <button onClick={handleShow} className="button-selanjutnya">
                        <h1>Submit</h1>
                    </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Pendaftaran Berhasil</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kamu akan segera dihubungi oleh tim kami</Modal.Body>
                <Modal.Footer>
                <a href="/dashboard">
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </a>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default GoDigitalConsultationForm;