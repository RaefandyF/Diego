import React, { useState } from "react";
import "../css/Header.css";
import LogoDiego from "../assets/logoDiego.png";

function Header(props) {
    const [showHeader, setShowHeader] = useState("max-[500px]:hidden");
    // const [overflow, setOverflow] = useState("")
    
    // const style = {
    
    //     // Adding media query..
    //     '@media (max-width: 500px)': {
    //       display: 'block',
    //     },
    // };
    
    
    function handleClick(event) {
        event.preventDefault();
    
        if(showHeader == "max-[500px]:hidden") {
            setShowHeader("max-[500px]:block");
            document.body.classList.add('overflow-hidden');
        } else if(showHeader == "max-[500px]:block") {
            setShowHeader("max-[500px]:hidden");
            // document.body.classList.remove('overflow-hidden');
        }
    }
    
    return(
        // <div>
        //     <div className="bg-[#f1e3cb] flex h-[6vw]">
        //             <img src={LogoDiego} height="100vw" width="150vw" className="mt-[1vw] ml-[3vw] mr-[40vw] mb-[1vw]" />
        //             <div className="mt-[1vw]">
        //                 <a className="text-[1.736vw] text-[#CA5116] font-[800] underline cursor-pointer">Home</a>
        //                 <a className="ml-[4.653vw] text-[1.736vw] text-[#CA5116] font-[600] hover:underline cursor-pointer">Tentang kami</a>
        //                 <a href="/login">
        //                     <button href="/login" className="border-solid text-[1.736vw] font-[600] ml-[4.653vw] rounded-[2.083vw] w-[16.944vw] h-[3.333vw] text-[#CA5116] bg-white">Login</button>
        //                 </a>
        //             </div>
        //     </div>
        // </div>

        <div className={"header px-[2vw] py-[1vw] " + props.bgColor }>
            <img src={LogoDiego} className="logo-diego" />
            <button onClick={handleClick} className="bar-button">
                <i class="fa-solid fa-bars bar-icon"></i>
            </button>
            <div className={"header-right " + showHeader}>
                <a className="header-text" class={props.classHome} href="/">Home</a>
                {/* <a className="header-text" class={props.classResume} href="/resume">Resume</a> */}
                <a className="header-text" class={props.classProject} href="/tentang-kami">Tentang Kami</a>
                <a href="/login">
                    <button className={props.buttonColor}>Login</button>
                </a>
                {/* <a className="header-text" class={props.classContact} href="/contact">Contact</a> */}
            </div>
        </div>
    );
}

export default Header;