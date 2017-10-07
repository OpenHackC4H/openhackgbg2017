import fetch from 'isomorphic-unfetch'

import Start from './Start'

import Button from 'material-ui/Button'
import Map from './components/Map'

export default class Index extends React.Component {
  static async getInitialProps () {
    console.log('getInitialProps')
    const response = await fetch('http://localhost:4000/users')
    const json = await response.json()
    console.log('json', json)

    return { users: json.data }
  }

  render () {
    const { users } = this.props

    return (
      <div>
        <div style={styles.pageContainer}>
          <Start />
        </div>
        <div style={styles.mapContainer}>
          <Map markers={users ? users : []}>
          </Map>
        </div>
        <style jsx global>{`
          * { box-sizing: border-box; margin: 0; padding: 0 }
        `}</style>
      </div>
    )
  }
}

const styles = {
  pageContainer: {
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  }
}
