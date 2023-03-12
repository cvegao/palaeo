import React from 'react';
import '../assets/css/SectionsBar.css';


function Item({ props }) {
    return (
        <>
            <a className="sections-bar-link" href={props.href}>
                <div className='sections-bar-item' id={props.id} style={{ background: `url(${props.bgImg})` }}>
                    <img className='sections-bar-img' src={props.iconSrc} alt={props.iconAlt}></img>
                    <span className="sections-bar-text">{props.text}</span>
                </div>
            </a>
        </>
    )
}

export default function SectionsBar() {
    return <div className='sections-bar'>
        <Item props={{
            href: "#", bgImg: require("../assets/img/marco-1.png"),
            iconSrc: require("../assets/img/icon-circular-notificacion.png"),
            iconAlt: "Circular",
            text: "CIRCULAR", id: "sections-bar-item-1-marco"
        }} />

        <Item props={{
            href: "#", bgImg: require("../assets/img/marco-2.png"),
            iconSrc: require("../assets/img/icon-calendar.png"),
            iconAlt: "Dates & Deadlines",
            text: "DATES & DEADLINES", id: "sections-bar-item-2-marco"
        }} />

        <Item props={{
            href: "#", bgImg: require("../assets/img/marco-3.png"),
            iconSrc: require("../assets/img/icon-keynotes.png"),
            iconAlt: "Keynote Speakers",
            text: "KEYNOTE SPEAKERS", id: "sections-bar-item-3-marco"
        }} />

<Item props={{
            href: "#", bgImg: require("../assets/img/marco-2.png"),
            iconSrc: require("../assets/img/icon-organizers.png"),
            iconAlt: "Organizers",
            text: "ORGANIZERS", id: "sections-bar-item-4-marco"
        }} />
    </div>
}
