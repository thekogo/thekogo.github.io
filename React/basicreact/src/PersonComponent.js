import React from 'react'
import './App.css'

export default function PersonComponent(props) {
    const { displayName, workPlace, imgUrl } = props;
    return (
        <div className="info-container">
            <img src={imgUrl} className="img-rounded" alt="Profile"/>
            <div className="info">
                <h4>{displayName}</h4>
                <span>{workPlace}</span>
            </div>
        </div>
    )
}
