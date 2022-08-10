import React, { Component } from 'react'
import Cards from '../cards'
import './card-list.styles.css'

export default class CardList extends Component {
  render() {
  const { monsters } = this.props
    return (
      <div className='card-list'>{monsters.map(monster => { 
        
        return (
          <Cards monster = {monster}/>
      )    
      })}</div>
    )
  }
}
