import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {click} = this.props

    return (
      <button onClick={click} type="button">
        Login
      </button>
    )
  }
}

export default Login
