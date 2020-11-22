import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));




export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-28T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  

  return (
    <div>
        


      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Issue
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Issue</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please give a detailed description of the bug you've encountered and
            submit it below. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
          />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date Created"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
         </MuiPickersUtilsProvider>


         <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Status</InputLabel>
            <Select
            value={status}
            onChange={handleChange}
            label="Status"
            >
            <MenuItem value='Severe'>Severe</MenuItem>
            <MenuItem value='Moderate'>Moderate</MenuItem>
            <MenuItem value='Okay'>Okay</MenuItem>
            </Select>
         </FormControl>


         <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={5}
          fullWidth
         />

         
         </DialogContent>
         <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}