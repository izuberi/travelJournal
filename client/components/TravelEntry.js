import React, { Component } from 'react';
import CreateEntry from './CreateEntry'
import UpdateEntry from './UpdateEntry';
import ReadEntry from './ReadEntry';
import DeleteEntry from './DeleteEntry';

export default class Wish extends Component {
    constructor() {
        super();
        this.state = {
            status: ""
            }
        }

    changeStatus(newStatus) {
        this.setState({
            status: newStatus
        })
    }

    render() {
        return (
            <div>
                <h1>Journal Options</h1>
                <div className="options">
                <CreateEntry data={
                    {status:this.state.status,
                    changeStatus:this.changeStatus.bind(this)
                    }}/>

                <UpdateEntry data={
                    {status:this.state.status,
                    changeStatus:this.changeStatus.bind(this)
                    }}/>
                    
                <div id="readAndDelete">
                <ReadEntry data={
                    {status:this.state.status,
                    changeStatus:this.changeStatus.bind(this)
                    }}/>
                <DeleteEntry data={
                    {status:this.state.status,
                    changeStatus:this.changeStatus.bind(this)
                    }}/>
                </div>
                </div>
                <h1 id="status"><u>Status</u>: {this.state.status}</h1>
            </div>
        )
    }
}