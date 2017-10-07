export default class Spinner extends React.Component {
  render () {
    return (
      <div style={styles.root}>
        <img style={styles.logo} src="/static/beengyang.png"/>
        <h1 style={styles.title}>Matching...</h1>
      </div>
    )
  }
}

const styles = {
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '0',
    fontFamily: 'Lato',
    color: '#283593',
    fontWeight: 'bold'
  },
  logo: {
    width: '125px',
    height: '125px',
    animationName: 'spin',
    animationIterationCount: 'infinite',
    animationDuration: '2000ms',
    animationTimingFunction: 'linear'
  }
}
