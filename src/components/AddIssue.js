import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Button } from '@material-ui/core';


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-style: solid;
  height: 25%;
  width: 25%;
  float: right;
  

`;



export class AddIssue extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             id: '',
             assigned: '',
             status: '',
             severity: 'Severe',
             description: '',
             posts: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleAssignedChange = event => {
        this.setState({assigned: event.target.value});
    }
    handleSeverityChange = event => {
        this.setState({severity: event.target.value});
    }
    handleDescriptionChange = event =>{
        this.setState({description: event.target.value});
    }

    clearInput = () => {
        this.setState({
            name: '',
            id: 1,
            assigned: Date(),
            status: true,
            severity: 'Severe',
            description: ''
        })
    }

    


    displayIssues = (posts) => {
        return posts.map()
        
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            id: 1,
            assigned: Date(),
            status: true,
            severity: this.state.severity,
            description: this.state.description
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('data has been sent')
                this.clearInput()
            })
            .catch(() => {
                console.log('data didnt send :(')
            })
    }
    
    

    render() {
        return (
            <div>
            <Wrapper>
            <form>
                <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>

                <div>
                 <label>Assigned</label>
                 <select value={this.state.assigned} onChange={this.handleAssignedChange}>
                    <option>Person #1</option>
                    <option>Person #2</option>
                    <option>Person #3</option>
                 </select>
                </div>

                <div>
                 <label>Severity</label>
                 <select value={this.state.severity} onChange={this.handleSeverityChange}>
                    <option value="Severe">Severe</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Okay">Okay</option>
                 </select>
                </div>

                <div>
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                </div>
                <Button variant="contained" color="primary" disableElevation onClick={this.handleSubmit}>Submit</Button>     
            </form>
            </Wrapper>
            <div>

            </div>

           

            </div>
        )
    }
}

export default AddIssue

