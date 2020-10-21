import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="img-header" />
            <div className="card-body">
                <h1>{props.header}</h1>
                <p>{props.des}</p>
                <button className="button">Learn More</button>
            </div>
        </div>
    )
}
