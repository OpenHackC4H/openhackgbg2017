import fetch from 'isomorphic-unfetch'
import Button from 'material-ui/Button'
import Map from './components/Map'

export default class Index extends React.Component {
  static async getInitialProps () {
    const response = await fetch('http://localhost:4000/users')
    const json = await response.json()

    return { users: json.data }
  }

  render () {
    const { users } = this.props

    return (
      <div>
        <Map />
      </div>
    )
  }
}
