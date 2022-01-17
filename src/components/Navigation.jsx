import React from 'react'
import "../styles/navigation.css"
import Sticky from "react-sticky-el";
import symbol from "../images/lightSymbol.jpg"

function Navigation() {
    return (
        <Sticky>
            <div className="navigation">
                <div className="empty1"></div>
                <div className="symbol"><img src={symbol} /></div>
                <div className="menu">
                    <li className="data"><b>HOME</b></li>
                    <li className="data"><b>ABOUT US</b></li>
                    <li className="data"><b>OUR NETWORK</b></li>
                    <li className="data"><b>GYWS</b></li>
                    <li className="data"><b>SUPPORT US</b></li>
                </div>
                <div className="empty2"></div>
                <div className="empty3 dropdown"></div>
                {/* <div className="search dropdown">chetan</div> */}
            </div>
        </Sticky>
    )
}

export default Navigation
