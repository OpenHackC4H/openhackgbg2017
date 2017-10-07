import fetch from 'isomorphic-unfetch'

import Start from './Start'

import Button from 'material-ui/Button'
import Map from './components/Map'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredUsers: props.users,
      selectedUsers: []
    }
  }

  static async getInitialProps () {
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
    this.setState({
      filteredUsers: users.filter(user => {
        return user.title.indexOf(value) !== -1
      })
    })
  }

  render () {
    const { users } = this.props
    const { selectedUsers, filteredUsers } = this.state
    console.log(users.length, filteredUsers.length, selectedUsers.length)

    return (
      <div>
        <div style={styles.pageContainer}>
          <Start
            onSearch={this.onSearch.bind(this)}
            selectedUsers={selectedUsers}
          />
        </div>
        <div style={styles.mapContainer}>
          <Map
            onSelectCity={this.onSelectCity.bind(this)}
            users={filteredUsers ? filteredUsers : []}>
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
