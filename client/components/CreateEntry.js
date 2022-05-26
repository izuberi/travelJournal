import React, { Component } from 'react';

export default class Wish extends Component {
    constructor() {
         super();
         this.state = {
             newfirstName: "",
             location: "",
             siteOne:"",
             siteTwo:"",
             siteThree:"",
             keySites: [],
             newDate: ""
             };
    }

    // POST fetch request to Create User
    createUserClick = () => {
        const data = JSON.stringify({
            firstName: this.state.newfirstName,
            location: this.state.location,
            keySites: this.state.keySites.concat(this.state.siteOne, this.state.siteTwo, this.state.siteThree),
            date: this.state.newDate
        })

        //console.log("sending data: ",data);
        const url = `http://localhost:3000/travel`
        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        .then(this.props.data.changeStatus("Created."))
    }

    inputfirstName = (val)=> {
        this.setState({
            newfirstName: val.target.value
        })
    }

    inputlocation = (val)=> {
        this.setState({
            location: val.target.value
        })
    }

    inputSiteOne = (val)=> {
        //const newSites = this.state.keySites.concat(val.target.value);
       // console.log("New Sites: ",newSites);
        this.setState({
            siteOne: val.target.value
        })
    }

    inputSiteTwo = (val)=> {
        //const newSites = this.state.keySites.concat(val.target.value);
       // console.log("New Sites: ",newSites);
        this.setState({
            siteTwo: val.target.value
        })
    }

    inputSiteThree = (val)=> {
        //const newSites = this.state.keySites.concat(val.target.value);
       // console.log("New Sites: ",newSites);
        this.setState({
            siteThree: val.target.value
        })
    }

    inputDate = (val)=> {
        this.setState({
            newDate: val.target.value
        })
    }

    render() {
        return (
            <div className="CreateEntry">
                <h1>Create Entry</h1>
                <h2>First Name:</h2>
                <input id='input' type='text' onChange={this.inputfirstName}/>
                <h2>Location: </h2>
                <input id='input' type='text' onChange={this.inputlocation}/>
                <h2>Key Sites: </h2>
                <h2>Site 1  <input id='input1' type='text' onChange={this.inputSiteOne}/></h2>
                <h2>Site 2  <input id='input1' type='text' onChange={this.inputSiteTwo}/></h2>
                <h2>Site 3  <input id='input1' type='text' onChange={this.inputSiteThree}/></h2>
                <h2>Date: </h2>
                <input id='input' type='text' onChange={this.inputDate}/>
                <div></div>
                <button className="button" onClick={this.createUserClick}>Create</button>
            </div>
        )
    }
}