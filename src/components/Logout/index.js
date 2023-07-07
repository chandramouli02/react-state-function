import './index.css'
import {Component} from 'react'

class Logout extends Component {
  render() {
    const {click} = this.props
    return (
      <button onClick={click} type="button">
        Logout
      </button>
    )
  }
}

export default Logout
