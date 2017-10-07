import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import fetch from 'isomorphic-unfetch'
import MultipleSelect from './select'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

export default class FormDialog extends React.Component {
  state = {
    open: false,
    user: {}
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
    const { onRegister } = this.props
    const { user } = this.state
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      mode: 'cors',
    })
    .then(response => response.json())
    .then(json => {
      this.handleRequestClose()
      onRegister(json.user)
    })
  }

  render() {
    const { user } = this.state

    return (
      <div style={styles.registerButton}>
        <Button onClick={this.handleClickOpen}>Register</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{'Register'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Register to this website, please fill in your information here.
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
              id="title"
              label="title"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "title")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="city"
              label="city"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "city")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="interestedIn"
              label="interestedIn"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "interestedIn")}
            />
            <MultipleSelect
              autoFocus
              margin="dense"
              id="seniority"
              label="Seniority"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, 'seniority')}
              selectedValue={user.seniority ? user.seniority : ''}
              values={[
                "Less than 1 year",
                "2 to 5 years",
                "More than 5 years"
              ]}
            />
            <MultipleSelect
              autoFocus
              margin="dense"
              id="companySize"
              label="Company size"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, 'companySize')}
              selectedValue={user.companySize ? user.companySize : ''}
              values={[
                "Less than 5 people",
                "5 to 50 people",
                "50 to 500 people",
                "More than 500 people"
              ]}
            />
            <TextField
              autoFocus
              multiline
              margin="dense"
              rows="4"
              id="jobDescription"
              label="jobDescription"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "jobDescription")}
            />
            <TextField
              autoFocus
              multiline
              margin="dense"
              rows="5"
              id="workplaceDescription"
              label="workplaceDescription"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "workplaceDescription")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="languages"
              label="languages"
              type="text"
              fullWidth
              onChange={this.onTextFieldChange.bind(this, "languages")}
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

const styles = {
  registerButton: {
    position: 'absolute',
    top: '45px',
    left: '5px'
  }
}
