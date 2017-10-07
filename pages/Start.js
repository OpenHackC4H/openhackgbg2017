import TextField from 'material-ui/TextField'

export default class Start extends React.Component {
  render () {
    const { onSearch } = this.props
    return (
      <div style={styles.root}>
        <h1>AirB2B</h1>
        <h2>Connecting people</h2>
        <TextField
          id="search"
          onChange={onSearch.bind(this)}
          label="Search field"
          type="search"
          margin="normal"
        />
      </div>
    )
  }
}

const styles = {
  root: {
    marginTop: '100px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
