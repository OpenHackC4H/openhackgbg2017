export default class Start extends React.Component {
  render () {
    return (
      <div style={styles.root}>
        <h1>Hellos world</h1>
      </div>
    )
  }
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
