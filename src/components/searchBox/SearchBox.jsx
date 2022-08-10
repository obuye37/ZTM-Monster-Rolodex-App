import React, { Component } from 'react'
import './search-box.styles.css'
class SearchBox extends Component {
  render() {
    return (
      <div>
        <input 
        className={`search-box ${this.props.className}`} 
        onChange={this.props.onChangeHandler} 
        placeholder={this.props.placeholder} 
        type="search"  
        />
      </div>
    )
  }
}

export default SearchBox