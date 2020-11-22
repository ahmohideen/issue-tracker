import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Wrapper = styled.section`
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
`;



  

  const StyledTable = withStyles({
    root: {
      maxWidth : 950,
      
      flexGrow: 1,
    
    }
    
  })(TableContainer);



  
export class IssueTable extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount = () => {
        this.getIssue();
    }
    
    
    getIssue = () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({posts: data})
            console.log('data came back' + this.state.posts)
        })
        .catch(() => {
            alert('data wasnt received!')
        })

    }

    deleteUser = (userName) => {
        
        axios.delete('/api/delete/'+ userName)
        .then(() => {
            console.log('success')
        })
        .catch(() => {
            alert('Data wasnt deleted: ' + userName)
        })
    }
    
    render() {
        

        return (
            <div>
                
                <h></h>
                


                <StyledTable component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Assigned</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Severity</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.posts.map((issue) => (
                        <TableRow key={issue.name}>
                        <TableCell component="th" scope="row">
                            {issue.id}
                        </TableCell>
                        <TableCell align="right">{issue.name}</TableCell>
                        <TableCell align="right">{issue.assigned}</TableCell>
                        {issue.status === true ?
                            <TableCell align="right">Open</TableCell>
                        : <TableCell align="right">Closed</TableCell>}
                        
                        <TableCell align="right">{issue.severity}</TableCell>
                        <TableCell align="center">{issue.description}</TableCell>
                        <TableCell><MdDelete onClick={() => {if(window.confirm('Delete the item?'))
                            {this.deleteUser(issue.name)}
                        }}/> </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </StyledTable>
                
            </div>
        )
    }
}

export default IssueTable
