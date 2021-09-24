import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: [],
        loading: false
       
    }

    submitPokemon = async (e) => {
        e.preventDefault()
       this.fetchPokemon()
    }

        searchPokemon = (e) => {
            this.setState({searchPokemon: e.target.value})
        }
    componentDidMount = async () => {
      this.fetchPokemon()
    }
    fetchPokemon = async () =>{
        this.setState({loading: true})
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=pokemon&direction=${this.state.sortPokemon}&perPage=all`)
        this.setState({
            pokemonArray: response.body.results, 
            loading:false
        })
        
    }
    findPokemon = async (e) => {
        this.setState({searchPokemon: e.target.value})
    }
    sortPokemon = (e) =>{
        this.setState({ sortPokemon: e.target.value})

    }
    render() {
       console.log(this.state.searchPokemon);
        return (
            <div>

                <form onSubmit={this.submitPokemon}>
                    <select onChange={this.sortPokemon}>
                        <option value="asc">ASC</option>
                        <option value="desc">DSC</option>
                        </select>
                    <input onChange={this.searchPokemon}/>
                    <button>Find Your Pokemon!!</button>
                </form>
                {this.state.loading
                ? <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt='pokemon' />
                :
               <PokeList pokeArray = {this.state.pokemonArray}/>
    }  
            </div>
        )
    }
}
