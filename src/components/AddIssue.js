import React, { Component } from 'react'
import styled from 'styled-components';



const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-style: solid;
  height: 25%;
  width: 25%;
`;



export class AddIssue extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             id: '',
             assigned: '',
             status: '',
             severity: '',
             description: ''
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
    
    handleSubmit(event) {
        this.setState({id: 123456789});
        this.setState({status: 'open'});
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <Wrapper>
            <form onSubmit={this.handleSubmit}>
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
                    <option>Severe</option>
                    <option>Moderate</option>
                    <option>Okay</option>
                 </select>
                </div>

                <div>
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                </div>

                <input type="submit" value="Submit" />
            </form>
            </Wrapper>
            </div>
        )
    }
}

export default AddIssue

