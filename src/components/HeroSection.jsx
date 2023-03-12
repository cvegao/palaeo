import React from 'react';
import '../assets/css/HeroSection.css';


function Title({ props }) {
    return (
        <>
            <div className='hero-title'>
                <h5 className='hero-title-header'>{props.header}</h5>
                <h1 className='hero-title-main'>{props.main}</h1>
                <h2 className='hero-title-subtitle'>{props.subtitle}</h2>
            </div>
        </>
    )
}

function Button({ props }) {
    return <div className='hero-button'>
        <a href={props.href} className='hero-button-btn'>{props.text}</a>
    </div>
}

function Logo({ props }) {
    return <div className='hero-logo'><img src={props.src} alt={props.alt} className='hero-logo-img'></img></div>
}

export default function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='hero-section-left'>
                <Title props={{ header: "PALEO VC 2023", main: "4th Palaeontological", subtitle: "VIRTUAL CONGRESS" }} />
                <Button props={{ href: "#", text: "REGISTER NOW" }} />
            </div>
            <div className='hero-section-right'>
                <Logo props={{ src: require('../assets/img/img-logo-color.png'), alt: "PALAEOVC" }} />
            </div>
        </div>
    )
}