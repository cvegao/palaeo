import React, { Fragment } from 'react';
import '../assets/css/AboutUs.css';


function Image({ props }) {
    return (
        <>
            <div className='about-us-left-section'>
                <img className='about-us-left-section-img' src={props.src} alt={props.alt}></img>
            </div>
        </>
    )
}

function Title({ props }) {
    return (
        <>
            <h3 className='about-us-main-title'>{props.content}</h3>
        </>
    )
}

function Body({ props }) {
    return <p className='about-us-main-body'>{ props.text }</p>
}

function Button({ props }) {
    return (
        <div className='about-us-main-btn'>
            <a className='about-us-main-btn-a' href={ props.href }>{ props.text }</a>
        </div>
    )
}

function Main({ props }) {
    return <div className='about-us-main'>
       <Title props={{ content: props.title }} />
       <Body props={{ text: props.body }} />
       <Button props={{ href: props.btnHref, text: props.btnContent }} />
       </div>
}

export default function AboutUs() {
    const bodyCode = <Fragment><span className='underline'>We work</span> <span className='bold style-normal'>together</span> to create, share and get together <span className='underline'>around the world</span>. Palaeovc is the first palaeontology <span className='underline'>meeting platform</span> 100% online, no matter where you are.</Fragment>
    return (
        <div className='about-us'>
            <Image props={{ src: require("../assets/img/team-default.png"), alt: "Team default" }} />
            <Main props={{ title: "ABOUT US", body: bodyCode, btnHref: "#", btnContent: "MEET THE TEAM" }} />
        </div>
    )
}