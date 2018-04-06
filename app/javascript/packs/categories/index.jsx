import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CategoriesList from './categorieslist'

class Categories extends Component {

  constructor(props){
    super(props);

    this.state = { categories: [] };

    $.getJSON('/search?q=')
      .then(response => this.setState({ categories: response }))
  }

  render() {
    return (
      <div>
        <div className='Categories'>
          <CategoriesList allCategories={ this.state.categories } />
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Categories />,
    document.body.appendChild(document.createElement('div')),
  )
});