import React, {Component} from 'react'

export default function WeatherDay(props){
    return(
        <div className="weather-day-container">
            <div className= "weather-day-text-styling grey-text">{props.Day}</div>
            <div><img height="55" width="55" src={props.Image}/></div>
            <div><span className= "weather-text-styling">{props.High}</span><span className= "weather-text-styling grey-text">{props.Low}</span></div>
            
        </div>
    )
}