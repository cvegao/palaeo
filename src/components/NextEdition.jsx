import React from 'react';
import '../assets/css/NextEdition.css';

function Subtitle({ content }) {
    return <h4 className='next-edition-subtitle'>{content}</h4>
}

function Title({ content }) {
    return <h2 className='next-edition-title'>{content}</h2>
}

function Event({ props }) {
    return (
        <div className='next-edition-dates-event'>
            <div className='next-edition-dates-event-left'>
                <span className='next-edition-dates-event-left-day'>{props.day}</span>
            </div>
            <div className='next-edition-dates-event-right'>
                <span className='next-edition-dates-event-right-month'>{props.month}</span>
                <span className='next-edition-dates-event-right-description'>{props.description}</span>
            </div>
        </div>
    )
}

function Dates({ props, events }) {
    const eventsArr = events.map(
        (event) => {
            return (
               <Event props={{day: event.day, month: event.month, description: event.description}} />
            );
        }
    )

    return (
        <div className='next-edition-dates'>
            <h3 className='next-edition-dates-title'>{props.title}</h3>
            <div className='next-edition-dates-grid'>
                {eventsArr}
            </div>
        </div>
    )
}

function Button({ props }) {
    return (
        <div className='next-edition-btn'>
            <a className='next-edition-btn-a' href={props.href}>{props.text}</a>
        </div>
    )
}

export default function NextEdition() {
    let props = {
        events: [
            {day: 15, month: "September", description: "Thematic sessions proposals"},
            {day: 15, month: "September", description: "Thematic sessions proposals"},
            {day: 15, month: "September", description: "Thematic sessions proposals"},
            {day: 15, month: "September", description: "Thematic sessions proposals"},
            {day: 15, month: "September", description: "Thematic sessions proposals"},
            {day: 15, month: "September", description: "Thematic sessions proposals"},
        ]
    }

    return (
        <div className='next-edition'>
            <Subtitle content="PALEO VC 2023" />
            <Title content="4th Edition 2023"/>
            <Dates props={{ title: "DATES & DEADLINES" }} events={props.events} />
            <Button props={{href: "#", text: "REGISTER NOW"}} />
        </div>
    )
}