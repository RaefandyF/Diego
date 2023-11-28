import React from "react";
// import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import GoDigitalConsultationDetail from "./pages/GoDigitalConsultation";
import JasaGoDigital from "./pages/JasaGoDigital";
import LiveHosting from "./pages/LiveHosting";
import FotoVideoProduk from "./pages/FotoVideoProduk";
import TentangKami from "./pages/TentangKami";
import GoDigitalConsultationForm from "./pages/GoDigitalConsultationForm";

function App() {
  return (
    // Halaman 1    
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/go-digital-consultation" element={<GoDigitalConsultationDetail href={"/register"} />} />
          <Route path="/jasa-go-digital" element={<JasaGoDigital href={"/register"} />} />
          <Route path="/live-hosting" element={<LiveHosting href={"/register"} />} />
          <Route path="/foto-video-produk" element={<FotoVideoProduk href={"/register"} />} />
          <Route path="/go-digital-consultation-log" element={<GoDigitalConsultationDetail href={"/go-digital-consultation-form"} login={"hidden"} />} />
          <Route path="/jasa-go-digital-log" element={<JasaGoDigital href={"/paket"} login={"hidden"} />} />
          <Route path="/live-hosting-log" element={<LiveHosting href={"/paket"} login={"hidden"} />} />
          <Route path="/foto-video-produk-log" element={<FotoVideoProduk href={"/paket"} login={"hidden"} />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/go-digital-consultation-form" element={<GoDigitalConsultationForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
