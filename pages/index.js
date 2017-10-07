import fetch from 'isomorphic-unfetch'

import Start from './Start'

import Button from 'material-ui/Button'
import Map from './components/Map'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredUsers: props.users
    }
  }

  static async getInitialProps () {
    console.log('getInitialProps')
    const response = await fetch('http://localhost:4000/users')
    const json = await response.json()

    return { users: json.data }
  }

  onSelectCity(city) {
    console.log('onSelectCity', city)
    if (city === null) {
      this.setState({ selectedUsers: [] })
    }
    const { users } = this.props

    this.setState({
      selectedUsers: users.filter(user => {
        return user.city.toLowerCase() === city.toLowerCase()
      })
    })
  }

  onSearch(event) {
    const { users } = this.props
    const value = event.target.value
    console.log('text', event.target.value)
    console.log(users, this.state.filteredUsers)
    this.setState({
      filteredUsers: users.filter(user => {
        return user.title.indexOf(value) !== -1
      })
    })
  }

  render () {
    const { users } = this.props
    const { filteredUsers } = this.state
    console.log(users.length, filteredUsers.length)

    return (
      <div>
        <div style={styles.pageContainer}>
          <Start onSearch={this.onSearch.bind(this)} />
        </div>
        <div style={styles.mapContainer}>
          <Map users={filteredUsers ? filteredUsers : []}>
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
