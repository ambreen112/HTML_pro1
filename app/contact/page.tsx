
import React from "react";
import Link from "next/link";

export default function Contact(){
    return(
        <div>
            <b className ="contact">Contact Us</b>
            <br/>
            <p className ="contact-city">
            <b>LHR:</b>
            <Link  className ="anchor" href="tel:574543"> 031-6794837850690</Link>
          </p>
           <p className ="contact-city">
            <b>KHI:</b>
            <Link  className ="anchor" href="tel:574543"> 021-784985960</Link>
            </p> 
            <p className ="contact-city">
            <b>Wattsapp Number:</b>
            <Link className ="anchor" href="tel:574543"> 0312-63727677</Link>
            </p>
            < p className ="contact-city">
            <b>E-mail:</b>
            <Link  className ="anchor" href="st@gmail.com"> saghg124@gmail.com</Link>
            </p>

            <div className ="payment">
                <h2>Payment through...</h2>
                <div className ="picture1"></div>
                <div className ="picture2"></div>
               
            </div>

            <div className ="form">
                <form className ="form1">
                    <h1 className ="h1">Enter Your Details</h1>
           First Name:     <input className="fname" name="text" placeholder=" fname"/><br/>
           Last Name:     <input className="lname" name="text" placeholder=" lname"/><br/>
           E-mail:   <input className="email" name="g@Emil" placeholder=" Email"/><br/>
           DOB:   <input className="dob"type="DOB" placeholder="DOB"/><br></br>
           <button>Confirm</button>

                </form>
            </div>
           
</div>


          
        
    )
}