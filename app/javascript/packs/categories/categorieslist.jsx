import React, { Component } from 'react'

export default class CategoriesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categoriesMatching: []
    }
  }

  getCategory(category) {

    $.getJSON('/search?category=' + category)
      .then(response => this.setState({ categoriesMatching: response }))
  }

  clickedCategory(response) {
    console.log(response)
  }

  render() {

    let categoryList = this.props.allCategories.items ? this.props.allCategories.items.map((response, index) => {
      return <div key={ index } onClick={ this.getCategory.bind(this, response.category) } key={ index }>
        { response.category }
      </div>
    }) : false;

    let categoriesMatching = this.state.categoriesMatching.items ? this.state.categoriesMatching.items.map((response, index) => {
      return <div onClick={ this.clickedCategory.bind(this, response) } key={ index }>
        <h2>{ response.title } <span>${ response.price }</span></h2>
        <p> { response.description.substring(0,33) }</p>
        <p> { response.city }, { response.state }</p>
      </div>
    }) : false;

    return (
      <div>
        { categoryList }
        <div className='categories-matching'>
          { categoriesMatching }
        </div>
      </div>
    )
  }
}

