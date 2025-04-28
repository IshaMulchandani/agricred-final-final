import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="loginCont">
            <form action="">
                <h1>Login</h1>
                <div className="email">
                    <label htmlFor="">Email ID <span className="red">*</span></label>
                    <br />
                    <input type="text" required/>
                </div>
                <div className="password">
                    <label htmlFor="">Password <span className="red">*</span></label>
                    <br />
                    <input type="password" required/>
                </div>
                <Link to={'/investment-opportunities'}><button type="submit" className="submit-btn">Submit</button></Link>  
            </form>
        </div>
    )
}