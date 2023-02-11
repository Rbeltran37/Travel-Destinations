import React from "react";

export default function Cards(props) {

    return (
        <>
            <div className={props.item.cardPosition}>
                <div className="card-container">
                    <img className="card-img" src={props.item.image}></img>
                    <span className="card-title">{props.item.title}<br />{props.item.title2}</span>
                    <span className="card-subtitle">{props.item.subtitle}</span>
                    <span className="card-line">_</span>
                </div>
            </div>
        </>
    )
}