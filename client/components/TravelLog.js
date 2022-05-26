import React, { Component } from 'react';
import Box from './Box'

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             travelHistory: []
            };
}

componentDidMount() {
    const url = `http://localhost:3000/travel`
    fetch(url)
    .then(res => res.json())
    .then(res => {
        this.setState({
            travelHistory: res
        })
        //console.log("Travel history: ",this.state.travelHistory);
    })
}
    
render() {
    const boxes = [];
    for (let i = 0; i < this.state.travelHistory.length; i++) {
        boxes.push(<Box firstName={this.state.travelHistory[i].firstName} 
            location={this.state.travelHistory[i].location} 
            keySites={this.state.travelHistory[i].keySites}
            date={this.state.travelHistory[i].date}/>)
    }

    return (
        <div>
            <h1>Travel History: {this.state.travelHistory.length}</h1>
            <div className="log">
                {boxes}
            </div>
        </div>
    )
}
}