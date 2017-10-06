import fetch from 'isomorphic-unfetch'

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
        {users.map(user => {
          return <p>{user.title}</p>
        })}
        <p>Hello world</p>
      </div>
    )
  }
}
