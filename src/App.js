import React, { Component } from 'react'
import './App.css'
import CardList from './components/cardList/CardList'
import SearchBox from './components/searchBox/SearchBox'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => {
      this.setState({
        monsters:users
      })
    } )
}

 handleChange = (e) => {
  if(e.target.value){
    let searchString = e.target.value.toLowerCase()
  
   this.setState(() => {
    return {
    searchField:searchString
  }
  }
    
  )
  }

  
  
}

  render() {

    let filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField)
   )
    return (
      <div className="App">
        <h1 className='rolodex'>Rolodex Monsters</h1>
        <SearchBox className="search" placeholder="search monsters" onChangeHandler={this.handleChange} />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
}
}//component ending brace
export default App