import React, { Component } from 'react';

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             travelHistory: [], 
             imageUrl: "",
            };
    }

    componentDidMount () {
        fetch(`http://localhost:3000/images/${this.props.location}`)
        .then(res => res.text())
        .then(res => {
            this.setState({
                imageUrl: res
            })
            //console.log("Image URL: ", res);
        })
    }

    getLocation = (val) => {
        this.setState({
            location: val
        })
    }

render() {

    let sites = [];
    for (let i = 0; i < this.props.keySites.length; i++) {
        if (this.props.keySites[i] != "") sites.push(<li>{this.props.keySites[i]}</li>)
    }
    //console.log("Sites: ",sites);
    return (
        <div>
            <h1 className="box"> 
            <div className="infoBox">
            <h1><u>{this.props.location}</u></h1>
            <h2>{this.props.date}</h2>
            </div>
            <img className="img" src={this.state.imageUrl}></img>
            <div className='info'>
            <h2>Key Sites:</h2>
            <h2 id="sites">{sites}</h2>
            <h2 id="create">Created By: {this.props.firstName}</h2> 
            </div>
            </h1>
        </div>
    )
}
}