import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onClickedRandomNumberButton = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    const type = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">
            Count <span>{number}</span>
          </h1>
          <div className="card">
            <p className="sub-heading">Count is {type}</p>
            <button
              type="button"
              className="btn"
              onClick={this.onClickedRandomNumberButton}
            >
              Increment
            </button>
            <p className="para">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
