import fetch from 'isomorphic-unfetch'

import Start from './Start'

import Button from 'material-ui/Button'
import Map from './components/Map'
import Spinner from './components/Spinner'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredUsers: props.users,
      selectedUsers: [props.users[0], props.users[1], props.users[2], props.users[3]],
      city: 'Stockholm',
      matching: false,
      matches: []
    }
  }

  static async getInitialProps () {
    const response = await fetch('http://localhost:4000/users')
    const json = await response.json()

    return { users: json.data }
  }

  onSelectCity(city) {
    if (!city) {
      this.setState({ selectedUsers: [], city })
    }
    const { users } = this.props
    const selectedUsers = users.filter(user => {
      return user.city.toLowerCase() === city.toLowerCase()
    })

    this.setState({
      selectedUsers,
      city: selectedUsers.length ? city : null
    })
  }

  onSearch(event) {
    const { users } = this.props
    const { city } = this.state
    const value = event.target.value
    this.setState({
      filteredUsers: users.filter(user => {
        return user.title.indexOf(value) !== -1
      })
    })
  }

  onRegister(user) {
    this.setState({ matching: true, selectedUsers: [] })
    fetch(`http://localhost:4000/user/matches/${user._id}`)
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.setState({
            city: user.interestedIn[0],
            matching: false,
            selectedUsers: json.matches
          })
        }, 2500)
      })
  }

  render () {
    const { users } = this.props
    const { selectedUsers, filteredUsers, city, matching } = this.state

    return (
      <div>
        {matching ?
          <Spinner />
        :
        <div style={styles.pageContainer}>
          <Start
            city={city}
            onSelectCity={this.onSelectCity.bind(this)}
            onSearch={this.onSearch.bind(this)}
            onRegister={this.onRegister.bind(this)}
            selectedUsers={selectedUsers}
          />
        </div>
        }
        <div style={styles.mapContainer}>
          <Map
            onSelectCity={this.onSelectCity.bind(this)}
            users={filteredUsers ? filteredUsers : []}>
          </Map>
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Lato');
          * { box-sizing: border-box; margin: 0; padding: 0 }
          @keyframes spin {
            from {
              transform:rotate(0deg);
            }
            to {
              transform:rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  }
}

const styles = {
  pageContainer: {
    pointerEvents: 'auto'
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
