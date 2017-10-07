import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import fetch from 'isomorphic-unfetch'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    user: {

    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  onTextFieldChange = (key, event) => {
    const text = event.target.value
    const { user } = this.state
    user[key] = text

    this.setState({ user })
  }

  addUser = () => {
    const { user } = this.state
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user }),
      mode: 'cors',
    })
    .then(response => {
      console.log(response)
      this.handleRequestClose()
    })
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'Subscribe'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="username"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "username")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="password"
              type="password"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "password")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="city"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "city")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addUser.bind(this)} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
