import React, { Component } from 'react';

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             data: "",
             firstName: "",
             location: "",
             date: "",
             keySites: []
             };
    }

    // make AJAX calls HTTP request using fetch
    // previously componentDidMount
    // Fetch request to find user
    getUserClick = () => {
        //Fetch request to get a bucket list entry
        // How to fetch from a database request...
        const url = `http://localhost:3000/travel/${this.state.data}`
        fetch(url)
        // .json() parses the response body data as JSON and returns a JS Object/Array
        .then(res => res.json())
        .then(res => {
            if (res.err) this.props.data.changeStatus("Error, Invalid Entry")
            else {
                this.setState({
                    firstName: res[0].firstName,
                    location: res[0].location,
                    date: res[0].date,
                    keySites: res[0].keySites
                })
    
                let sentence = `Found -- ${this.state.location}: ` 
                for (let i = 0; i < this.state.keySites.length; i++) { 
                    if (this.state.keySites[i] != "") sentence = sentence.concat(`"${this.state.keySites[i]}" `)
                }
                sentence = sentence.concat(`on ${this.state.date} by ${this.state.firstName}.`)
                this.props.data.changeStatus(sentence);
            }
        })
    };

    inputData = (val)=> {
        this.setState({
            data: val.target.value
        })
        //Prints each letter you type in input, Once you click sends final input
       // console.log(val.target.value);
    }

    render() {
        return (
            <div className="ReadEntry">
                <h1>Find Entry</h1>
                <h2>Location:</h2>
                <input id='input' type='text' onChange={this.inputData}/>
                <div></div>
                <button className="button" onClick={this.getUserClick}>Find</button>
            </div>
        )
    }
}