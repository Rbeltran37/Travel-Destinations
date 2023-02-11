import React from "react";

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <img src="./images/globe.png" className="globe" />
                    <h1 className="nav-title">World Wide Wonders</h1>
                    <h1 className="nav-selectedText">Home</h1>
                    <h1 className="nav-text">Offers</h1>
                    <h1 className="nav-text">About Us</h1>
                    <h1 className="nav-text">Contact</h1>
                    <img src="./images/search.png" className="search" />
                    <img src="./images/login.png" className="login" />
                </div>
            </nav>
        </>
    )
}