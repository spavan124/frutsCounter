import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    bananaCount: 0,
    mangoCount: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading">
            Bob ate <span className="span">{bananaCount}</span> mangoes
            <span className="span">{mangoCount}</span> bananas
          </h1>
          <div>
            <div className="imag-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
