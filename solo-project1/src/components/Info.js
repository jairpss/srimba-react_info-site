import React from "react"
import jair from "../img/jair-picture.png"

function Info() {
    return(
        <div className="info">
            <img src={jair} alt="profile-pic" className="info--pic"/>
            <h1 className="info--name">Jair Partida</h1>
            <p className="info--job">Frontend Developer</p>
            <p className="info--web">jairpss.github.io</p>
            <div className="info--btn">
                <button className="info--btn_white">Email</button>
                <button className="info--btn_blue">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info