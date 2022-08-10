import React, { Component } from 'react'
import './card.styles.css'

export class Cards extends Component {
  render() {
      const { email, name, id } = this.props.monster
    return (
        <div key={id} className="card-container">
        <img 
        alt={`${name} monster`}
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
    </div>
    )
  }
}

export default Cards