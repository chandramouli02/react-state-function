import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isUserLoggedIn: false}

  click = () => {
    //  sending this function as prop for the buttons..
    const {isUserLoggedIn} = this.state
    console.log(isUserLoggedIn)
    if (isUserLoggedIn) {
      return this.setState({isUserLoggedIn: false})
    }
    return this.setState({isUserLoggedIn: true})
  }

  render() {
    const {isUserLoggedIn} = this.state
    //  conditional rendering for the button elements..
    // sending the state as props for message element..
    return (
      <div className="main-container">
        <Message isUserLoggedIn={isUserLoggedIn} />
        {!isUserLoggedIn && <Login click={this.click} />}
        {isUserLoggedIn && <Logout click={this.click} />}
      </div>
    )
  }
}

export default Home
