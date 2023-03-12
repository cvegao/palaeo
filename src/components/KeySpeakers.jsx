import React from 'react';
import '../assets/css/KeySpeakers.css';

function Speaker({ number, props }) {   
    if (number % 2 === 0) {
        return (
            <div className='speaker speaker_1-2'>
                <div className='speaker-img-left'>
                    <img className='speaker-img' src={props.src} alt={props.alt}></img>
                </div>
                <div className='speaker-content speaker-content-right'>
                    <h3 className='speaker-title'>{props.title}</h3>
                    <h5 className='speaker-name'>{props.name}</h5>
                    <p className='speaker-location'>{props.location}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='speaker speaker_2-1'>
                <div className='speaker-content speaker-content-left'>
                    <h3 className='speaker-title'>{props.title}</h3>
                    <h5 className='speaker-name'>{props.name}</h5>
                    <p className='speaker-location'>{props.location}</p>
                </div>
                <div className='speaker-img-right'>
                    <img className='speaker-img' src={props.src} alt={props.alt}></img>
                </div>
            </div>
        )
    }
}

export default function KeySpeakers () {
    let speakers = [
        {
            title: "Palaeoecological interpretazione from fossil bone microstructure",
            name: "PROF. ANUSUYA CHINSAMY-TURAN",
            location: "University of Cape Town, Cape Town, South Africa",
            src: require("../assets/img/persona-default1.png"),
        },
        {
            title: "A jurassic geothermal system in Patagonia (argentina): An enormous source of information on the diversity and ecology",
            name: "DR. IGNACIO ESCAPA",
            location: "Consejo Nacional de Investigaciones Científicas y Técnicas, Museo Paleontológico Egidio-Feruglio, Trelew, Argentina",
            src: require("../assets/img/persona-default4.png"),
        },
        {
            title: "Palaeoecological interpretazione from fossil bone microstructure",
            name: "PROF. ANUSUYA CHINSAMY-TURAN",
            location: "University of Cape Town, Cape Town, South Africa",
            src: require("../assets/img/persona-default3.png"),
        },
        {
            title: "A jurassic geothermal system in Patagonia (argentina): An enormous source of information on the diversity and ecology",
            name: "DR. IGNACIO ESCAPA",
            location: "Consejo Nacional de Investigaciones Científicas y Técnicas, Museo Paleontológico Egidio-Feruglio, Trelew, Argentina",
            src: require("../assets/img/persona-default2.png"),
        },
    ];

    const speakersArr = speakers.map(
        (speaker, i) => {
            return (
               <Speaker number={i} props={{title: speaker.title, name: speaker.name, location: speaker.location, src: speaker.src, alt: speaker.name}} />
            );
        }
    )

    return (
        <div className='keyspeakers'>
            <h2 className='keyspeakers-title'>KEYNOTE SPEAKERS</h2>
            <div className='keyspeakers-speakers'>{speakersArr}</div>
        </div>
    )
}