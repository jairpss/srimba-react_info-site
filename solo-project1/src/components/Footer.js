import React from "react"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import github from "../img/github.png"


function Footer() {
    return(
        <div className="footer">
            <img src={twitter} alt="tweet" className="footer--icon"/>
            <img src={facebook} alt="tweet" className="footer--icon"/>
            <img src={instagram} alt="tweet" className="footer--icon"/>
            <img src={github} alt="tweet" className="footer--icon"/>
        </div>
    )
}

export default Footer