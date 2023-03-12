import React from 'react';
import '../assets/css/Contact.css';

function Title({ title }) {
    return (
        <>
            <h4 className='contact-us-item-info-title'>{title}</h4>
        </>
    )
}

function Link({ props }) {
    return (
        <>
            <a className="contact-us-item-info-link" href={props.url}>{props.content}</a>
        </>
    )
}

function Logo({ props }) {
    return <img className="contact-us-item-logo-img" src={props.src} alt={props.alt}></img>
}

function Item({ props }) {
    return (
        <div className='contact-us-item'>
            <div className='contact-us-item-logo'>
                <Logo props={{ src: props.itemLogo, alt: props.itemLogoAlt }} />
            </div>
            <div className='contact-us-item-info'>
                <Title title={props.itemTitle} />
                <Link props={{ url: props.itemUrl, content: props.itemText }} />
            </div>
        </div>
    )
}

export default function Contact() {
    return (
        <div className='contact-us'>
            <h3 className='contact-us-title'>CONTACT US</h3>
            <div className='contact-us-items'>
                <Item props={{
                    itemLogo: require("../assets/img/icon-mail.png"),
                    itemLogoAlt: "e-mail",
                    itemTitle: "EMAIL",
                    itemUrl: "palaeovc@gmail.com",
                    itemText: "palaeovc@gmail.com"
                }} />

                <Item props={{
                    itemLogo: require("../assets/img/icon-fb.png"),
                    itemLogoAlt: "Facebook",
                    itemTitle: "FACEBOOK",
                    itemUrl: "https://www.facebook.com/PalaeoVC/",
                    itemText: "@PalaeoVC"
                }} />

                <Item props={{
                    itemLogo: require("../assets/img/icon-twitter.png"),
                    itemLogoAlt: "Twitter",
                    itemTitle: "TWITTER",
                    itemUrl: "https://twitter.com/palaeovc",
                    itemText: "@PalaeoVC"
                }} />

                <Item props={{
                    itemLogo: require("../assets/img/icon-discord.png"),
                    itemLogoAlt: "Discord",
                    itemTitle: "DISCORD",
                    itemUrl: "#",
                    itemText: "@PalaeoVC"
                }} />
            </div>
        </div>
    )
}