import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
    constructor() {
         super();
         this.state = {
             weather: "Not yet gotten"
             };
    }

    // make AJAX calls HTTP request using fetch
    // previously componentDidMount
    getWeatherClick = () => {
        axios.get('http://localhost:3000/weather')
        .then(response => {
            this.setState({
                weather: response.data.c
            })
            console.log(response.data.c);
        }) 
            
/*         fetch('http://localhost:3000/weather')
        .then(res => res.json())
        .then(res => {
            console.log(res);
        }) */
    };

    render() {
        return (
            <div>
                <button onClick={this.getWeatherClick}>Get weather in Kuwait </button>
                <h1>The weather in Kuwait is: {this.state.weather} </h1>
            </div>
        )
    }
}