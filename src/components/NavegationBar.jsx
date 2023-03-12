import React from 'react';
import '../assets/css/NavegationBar.css';

function Button({ props }) {
    return <a href={props.href} className='navbar-section'>
        {props.content}
    </a>
}

function Logo({ props }) {
    return <img
        src={props.src}
        alt={props.alt}
        className='navbar-logo'
    />
}

function UserAvatar({ avatar }) {
    return <img src={avatar} alt="Avatar" className='navbar-avatar' />
}

function UserInfo({ authenticated }) {
    if (!authenticated) {
        return (
            <a href='login.js' className='navbar-login'>
                <span className='navbar-login-btn'>LOG IN</span>
                <UserAvatar avatar={require('../assets/img/icon-user.png')} />
            </a>
        )
    } else {
        return (
            <UserAvatar avatar='TODO' />
        );
    }

}

function SearchIcon() {
    return (
        <button className='navbar-search-btn transparent' id='navbar-search-btn' type='button'>
            <img className='navbar-search-icon' src={require('../assets/img/icon-search.png')} alt='Search' />
        </button>
    );
}

export default function NavegationBar() {
    let state = { authenticated: false, }
    return (
        <div className='navbar'>
            <div className='flex-left'>
                <div className='navbar-logo-section'>
                    <Logo props={{ src: require('../assets/img/logo_palaeo_vc_blanco.png'), alt: "PALAEOVC Logo" }} />
                </div>
                <div className='navbar-sections'>
                    <Button props={{ content: "REGISTRATION", href: "#" }} />
                    <Button props={{ content: "PALEO VC 2023", href: "#" }} />
                    <Button props={{ content: "ABOUT US", href: "#" }} />
                    <Button props={{ content: "PREV. EDITIONS", href: "#" }} />
                    <Button props={{ content: "FAQ", href: "#" }} />
                </div>
            </div>
            <div className='flex-right'>
                <div className='navbar-userinfo'>
                    <UserInfo authenticated={state.authenticated} />
                </div>
                <div className='navbar-search-part'>
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}