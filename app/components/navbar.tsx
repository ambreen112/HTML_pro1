//import style from "/style/global.module.css";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse} from "@fortawesome/free-solid-svg-icons";



export default function Navbar(){
    return(
        <>
       
       
            <header className="head">
           
            <nav  className="nav">
           
                <ul className="ul">
                
                <li className="li"><Link href="/"><FontAwesomeIcon icon={faHouse} className="home-icon" />Home</Link></li>
                <li className="li"> <Link href="/about"><FontAwesomeIcon icon={faContactBook} className="About-icon" />About</Link></li>
                <li className="li"> <Link href="/contact"><FontAwesomeIcon icon={faPhone} className="About-icon" />Contact</Link></li>
                </ul>
               
                
            </nav>
           
        </header>  

     </>   
    )
}