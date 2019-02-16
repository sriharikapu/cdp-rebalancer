import React from 'react'
import Tabs from './../tabs'
import './styles.scss'

class Sidebar extends React.Component {
  state = {
    rebalanceValue: 0,
    activeTab: ''
  }
  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }
  handleSlider = e => {
    this.setState({
      rebalanceValue: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Clicked!')
  }
  render() {
    return (
      <div className='sidebar'>
        <Tabs />
        <form className='rebalance-form'>
          <h3>Rebalance your CDPs</h3>
          <label htmlFor='cdp-first'>From:</label>
          <select
            className='select'
            type='text'
            name='cdp-first'
            defaultValue='cdp1'
          >
            <option value='cdp1'>CDP 1</option>
            <option value='cdp2'>CDP 2</option>
          </select>
          <label htmlFor='cdp-second'>To:</label>
          <select
            className='select'
            type='text'
            name='cdp-second'
            defaultValue='cdp2'
          >
            <option value='cdp1'>CDP 1</option>
            <option value='cdp2'>CDP 2</option>
          </select>
          <div className='range-label'>
            <span>Amount:</span>
            <span>{this.state.rebalanceValue}% (x ETH)</span>
          </div>
          <input
            name='rebalance'
            type='range'
            defaultValue={this.state.rebalanceValue}
            onChange={this.handleSlider}
          />
          <button onClick={this.handleSubmit}>Rebalance</button>
        </form>
      </div>
    )
  }
}

export default Sidebar
