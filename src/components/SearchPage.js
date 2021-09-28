import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: [],
        loading: false,
        page: 1
       
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
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=pokemon&direction=${this.state.sortPokemon}&page=${this.state.page}&perPage=20`)
        this.setState({
            pokemonArray: response.body.results, 
            loading:false
        })

        
    }
    ascendUpwards = async () => {
        await this.setState({page: this.state.page + 1})
         this.fetchPokemon()
    }

    ascendingDownwards = async () => {
        await this.setState({page: this.state.page - 1 })
      this.fetchPokemon()

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
                <button onClick={this.ascendUpwards}>Up</button>
                {this.state.page !==1 ? <button onClick={this.ascendingDownwards}>Down</button> :null}
                {this.state.loading
                ? <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt='pokemon' />
                :
               <PokeList pokeArray = {this.state.pokemonArray}/>
    }  
            </div>
        )
    }
}
