import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../css/Login.css";
import Alert from "../component/Alert";
import DiegoLogo from "../assets/logoDiego.png";

export let namaLengkap = "";
export let NamaBisnis = "";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginData, setLoginData] = useState([]);
    const [show, setShow] = useState(false);


    function handleSubmit() {

        // event.preventDefault();
        // try {
        //    let res = await axios({
        //         url: 'http://localhost:8080/login',
        //         method: 'POST',
        //         data: {email, password}          
        //     })
        //     if(res.status == 200){
        //         // test for status you want, etc
        //         setLoginData(res.data)
        //     }    
        //     // Don't forget to return something   
        // }
        // catch (err) {
        //     console.error(err);
        // }
            axios.post('http://localhost:8080/login', { email, password })
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.length);
                    setLoginData(res.data)
                    // setTimeout(()=>{
                    //     setLoginData(res.data)
                    //     // console.log('loading ...')
                    //     // setIsLoading(false)
                    // }, 3000)
                    console.log("INI PANJANG " + loginData.length);
                    console.log("ini isi " + loginData);
                    console.log(res.status);

                    // if(loginData == undefined) setIsLoading(true);

                    if (res.data.length != 0) {
                        namaLengkap = res.data[0].NamaLengkap;
                        NamaBisnis = res.data[0].NamaBisnis;
                        console.log(namaLengkap);
                        console.log(NamaBisnis);
                        navigate('/dashboard');
                    } else {
                        // namaLengkap = "tidak ada";
                        console.log("HALO INI SALAH");
                        setShow(true);
                    }
                    // setLoginData("");
                })
                .catch(err => console.log(err));

        // expensesListResp();


    }





    return (
        <div className="container">
            <h1></h1>
            <div className="login-container">
                <div>
                    <img className="logoDiego" src={DiegoLogo} alt="Logo" />
                </div>
                <h2></h2>
                {/* <form id="login-form"> */}
                {(show) ? <Alert pesan={"email atau password salah"} /> : <div></div>
                }
                <div className="input-group">
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                    <i className="fas fa-user"></i>
                </div>
                <div className="input-group">
                    <input className="login-password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                    <i className="fas fa-lock"></i>
                </div>
                <button className="loginButton" onClick={() => {
                    handleSubmit()
                }}>Masuk</button>
                {/* </form> */}
                <p className="login-toRegister">Belum memiliki akun? <a href="/register" id="signup-link">Daftar</a></p>
            </div>
        </div>
    );
}

export default Login;