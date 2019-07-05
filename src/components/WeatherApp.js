import React, { Component } from 'react';
import WeatherDay from './WeatherDay'
export default class WeatherApp extends Component{
    constructor(props){
        super(props)
        this.FetchWeatherData = this.FetchWeatherData.bind(this)
    }
    FetchWeatherData(){
        alert("hi")
        fetch("https://localhost:44358/api/values")
        .then(response => response.json())
        .then(data => console.log("test"))
    }
    render(){
        this.FetchWeatherData()
        return(
            <div>
                <WeatherDay
                    Day="Mon"
                    Image="https://www.noaa.gov/sites/default/files/styles/crop_394x394/public/thumbnails/image/FocusArea__Weather-02.jpg"
                    High="70"
                    Low="60"
                />
                <WeatherDay
                    Day="Mon"
                    Image="https://www.noaa.gov/sites/default/files/styles/crop_394x394/public/thumbnails/image/FocusArea__Weather-02.jpg"
                    High="70"
                    Low="60"
                />
            </div>
        )
    }
} 