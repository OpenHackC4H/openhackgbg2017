import TextField from 'material-ui/TextField'
import Register from './components/Register'
import Grid from './components/Grid'

export default class Start extends React.Component {
  render () {
    const { onSearch, selectedUsers, city, onSelectCity } = this.props
    const rootStyle = {
      ...styles.root,
      marginTop: city ? '10px' : '200px'
    }

    return (
      <div style={rootStyle}>
        <img style={styles.logo} src="/static/beengyang.png"/>
        <h1 style={styles.title}>AirB2B</h1>
        <TextField
          id="search"
          onChange={onSearch.bind(this)}
          label="Search for a job"
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
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    marginTop: '0',
    fontFamily: 'Lato',
    color: '#283593',
    fontWeight: 'bold'
  },
  root: {
    transitionTimingFunction: 'ease',
    transition: 'all 0.5s',
    pointerEvents: 'auto',
    marginTop: '10px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
