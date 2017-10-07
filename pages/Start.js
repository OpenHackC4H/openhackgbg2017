import TextField from 'material-ui/TextField'
import Register from './components/Register'
import Grid from './components/Grid'

export default class Start extends React.Component {
  render () {
    const { onSearch, selectedUsers, city, onSelectCity } = this.props
    return (
      <div style={styles.root}>
        <h1 style={styles.title}>AirB2B</h1>
        <TextField
          id="search"
          onChange={onSearch.bind(this)}
          label="Search field"
          type="search"
          margin="normal"
        />
        <Grid
          onSelectCity={onSelectCity}
          users={selectedUsers}
          city={city} />
        {selectedUsers && selectedUsers.length ?
          <Register />
        : null}
      </div>
    )
  }
}

const styles = {
  title: {
    fontFamily: 'Lato',
  },
  root: {
    pointerEvents: 'auto',
    marginTop: '100px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
