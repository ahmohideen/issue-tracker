import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IssueTable from './IssueTable';
import TocIcon from '@material-ui/icons/Toc';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    alignItems: 'left',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <AccountCircle />
          <Typography variant="h6" noWrap>
            Issue Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>

          <List>
              
            <ListItem button key='Issue Table'>
                <ListItemIcon> <TocIcon /> </ListItemIcon>
                <ListItemText primary='Issue Table' />
            </ListItem>
            <ListItem button key='Graph'>
                <ListItemIcon> <AssessmentIcon/> </ListItemIcon>
                <ListItemText primary='Graph' />
            </ListItem>
            <ListItem button key='User Preferences'>
                <ListItemIcon> <PersonIcon/> </ListItemIcon>
                <ListItemText primary='User Preferences' />
            </ListItem>

          </List>  

        
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <IssueTable></IssueTable>
        
      </main>
    </div>
  );
}