import React, { Component } from 'react'

export default class AutoCompleteList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let autoCompleteList = this.props.response.map((response, index) => {
      return <div className='item' style={{ cursor: 'pointer', listStyleType: 'none' }} key={ index } >
              <img src='https://blog.caranddriver.com/wp-content/uploads/2017/06/Screen-Shot-2017-06-30-at-4.35.46-PM-626x354.png'/>
              <h2>{ response.title } <span>${ response.price }</span></h2>
              <p>{ response.description.substring(0,33) }</p>
              <p>{ response.city }, { response.state }</p>
             </div>
    });

    return (
      <div>
        { autoCompleteList }
      </div>
    )
  }
}