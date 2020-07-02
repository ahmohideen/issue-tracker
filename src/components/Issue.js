import React, { Component } from 'react'

class Issue extends Component {
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
    }
    

    render() {
        return (
            <div>
                This is an Issue Tracker
            </div>
        )
    }
}

export default Issue
