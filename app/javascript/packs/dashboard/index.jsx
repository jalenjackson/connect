import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AutoCompleteList from './autoCompleteList'

let lastSearchTermTitle = $('.user-last-search-term-hidden').val();
let lastSearchTermCity = $('.user-last-search-term-city-hidden').val();


class Dashboard extends Component {

  constructor(props){
    super(props);

    this.state = {
      'term': lastSearchTermTitle,
      'city_term': lastSearchTermCity,
      items: [],
      last_search_term_item: ''
    };

    $.getJSON('/search?q=' + this.state.term)
      .then(response => this.setState({ items: response.items }))
  }

  getItemResultsAndSetLastSearchTerm(stateChange, event){
    this.setState({ [stateChange === 'term' ? 'term' : 'city_term']: event.target.value }, () => {
      $.getJSON('/search?q=' + this.state.term + '&city=' + this.state.city_term )
        .then(response => this.setState({ items: response.items }))
        .then(()=>{
          $.ajax({
            type: "POST",
            url: stateChange === 'term' ? '/last-search-term' : '/last-search-term-city',
            data: { term: stateChange === 'term' ? this.state.term : this.state.city_term },
          })
        });
    });
  }

  amountSelling(){
    return this.searchBar && this.searchBar.value === '' ? `All ${this.state.items.length} Items For Sale` : `${this.state.items.length} Matching Results`
  }

  setInputValue(e){
    this.searchBar.value = e.target.innerText
  }

  render(){

    return (
      <div>
        <div className='search-container'>
          <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getItemResultsAndSetLastSearchTerm.bind(this, 'term') } type='text' placeholder='Search For An Item...' />
          <input ref={ (cityInput) => { this.citySearch = cityInput } } value={ this.state.city_term } onChange={ this.getItemResultsAndSetLastSearchTerm.bind(this, 'city_term') } type='text' placeholder='City...' />
        </div>
        <h1 className='amount-selling'>{ this.amountSelling() }</h1>
        <div className='items'>
          { <AutoCompleteList response={this.state.items} /> }
        </div>
        <hr/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
});