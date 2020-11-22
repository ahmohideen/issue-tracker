import React from 'react';
import './App.css';
import AddIssue from './components/AddIssue';
import IssueTable from './components/IssueTable';
import NavSidebar from './components/NavSidebar';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AddModal from './components/AddModal';


function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <SideBar></SideBar>
      <AddIssue></AddIssue>
      <AddModal></AddModal>
      {/*<IssueTable></IssueTable>*/}
      
      {/* 
      so like what we need is a table of issues
      and then like a component-view (?) of issues
      and also umm a sidebar and a top navbar thing
      how are we creating new issues? let's make that the 
      number one thing to work on. 
      alrighty next step - figure out how to set up a database 
      and send data back and forth. Sum to do with rest apis maybe?


      okay as of 7/28, what we need to work on is:
      -sending the right date
      -updating ids as we go along
      -login/oauth
      -the graph 
      -editing descriptions 
      -table pagination
      -adding with button and pop up window
      */}
    </div>
  )
}

export default App;
