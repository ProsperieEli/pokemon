import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: []
       
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
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=direction=desc${this.state.sortPokemon}`)
        this.setState({pokemonArray: response.body.results })
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
                    <select>
                        <option value="">ASC</option>
                        <option value="desc">DSC</option>
                        </select>
                    <input onChange={this.searchPokemon}/>
                    <button>Find Your Pokemon!!</button>
                </form>
                <PokeList pokeArray = {this.state.pokemonArray}/>
            </div>
        )
    }
}
