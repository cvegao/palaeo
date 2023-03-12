import React, { Fragment } from 'react';
import '../assets/css/Circular.css';

function Info({ props }) {
    return (
        <>
            <h5 className='circular-info-title'>{props.title}</h5>
            <p className='circular-info-description'>{props.description}</p>
        </>
    )
}

function Main({ props }) {
    return (
        <div className='circular-main'>
            <div className='circular-main-logo'>
                <img className='circular-main-logo-img' src={props.src} alt={props.alt}></img>
            </div>
            <div className='circular-main-message'>
                <p className='circular-main-message-content'>{props.text} <a href={props.url} className='circular-main-message-readmore'>READ MORE</a></p>
            </div>
        </div>
    )
}

export default function Circular() {
    const text = <Fragment> We are pleased to announce that Earth and Environmental Science Transactions of <span className="circular-bold-text">The Royal Society of Edinburgh</span> is going to publish a Special Volume containing full papers from selected presentations in the 3rd PVC.</Fragment>
    return (
        <div className='circular'>
            <div className='circular-left'>
                <h2 className='circular-title'>CIRCULAR</h2>
                <Info props={{title: "Stay informed!", description: "Stay informed! Paragraph to explain meaning and usage of circular, this also could be replaced with a photograph."}} />
            </div>
            <Main props={{src: require("../assets/img/logo-grupo3.png"), alt: "PALAEOVC 2023", text: text, url: "#"}} />
        </div>
    )
}