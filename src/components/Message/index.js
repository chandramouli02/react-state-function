import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    //  console.log(this.props) // {isUserLoggedIn: false}
    const {isUserLoggedIn} = this.props
    return (
      <div>
        {isUserLoggedIn && <h1>Welcome User</h1>}
        {!isUserLoggedIn && <h1>Please Login</h1>}
      </div>
    )
  }
}

export default Message
