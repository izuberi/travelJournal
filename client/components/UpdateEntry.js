import React, { Component } from 'react';

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             data: "",
             newDate: "",
             siteOne:"",
             siteTwo:"",
             siteThree:"",
             keySites: []
             };
    }

    // PATCH fetch request to Update User
    updateUserClick = () => {
         const data = JSON.stringify({
            date: this.state.newDate,
            keySites: this.state.keySites.concat(this.state.siteOne, this.state.siteTwo, this.state.siteThree)
        })
 
        //console.log("Location to update: ", this.state.data);
        const url = `http://localhost:3000/travel/${this.state.data}`
        fetch(url, 
        {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        .then(this.props.data.changeStatus("Updated."))
    }

    inputData = (val)=> {
        this.setState({
            data: val.target.value
        })
        //Prints each letter you type in input, Once you click sends final input
       // console.log(val.target.value);
    }

    inputDate = (val)=> {
        this.setState({
            newDate: val.target.value
        })
    }

    inputSiteOne = (val)=> {
        this.setState({
            siteOne: val.target.value
        })
    }

    inputSiteTwo = (val)=> {
        this.setState({
            siteTwo: val.target.value
        })
    }

    inputSiteThree = (val)=> {
        this.setState({
            siteThree: val.target.value
        })
    }


    render() {
        return (
            <div className="UpdateEntry">
                <h1>Update Entry</h1>
                <h2>Location:</h2>
                <input id='input' type='text' onChange={this.inputData}/>
                <h2>New Date:</h2>
                <input id='input' type='text' onChange={this.inputDate}/>
                <h2>New Key Sites:</h2>
                <h2>Site 1 <input id='input1' type='text' onChange={this.inputSiteOne}/></h2>
                <h2>Site 2 <input id ='input1' type='text' onChange={this.inputSiteTwo}/></h2>
                <h2>Site 3 <input id ='input1' type='text' onChange={this.inputSiteThree}/></h2>
                <button className="button" onClick={this.updateUserClick}>Update</button>
            </div>
        )
    }
}