import React, { Component } from 'react';

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             data: "",
             };
    }

    inputData = (val)=> {
        this.setState({
            data: val.target.value
        })
        //Prints each letter you type in input, Once you click sends final input
       // console.log(val.target.value);
    }

    deleteUserClick = () => {
        const url = `http://localhost:3000/travel/${this.state.data}`
        fetch(url, {method: "DELETE"})
        .then(this.props.data.changeStatus("Deleted."))
    }

    render() {
        return (
            <div className="DeleteEntry">
                <h1>Delete Entry</h1>
                <h2>Location: </h2>
                <input id='input' type='text' onChange={this.inputData}/>
                <div></div>
                <button className="button" onClick={this.deleteUserClick}>Delete</button>
            </div>
        )
    }
}