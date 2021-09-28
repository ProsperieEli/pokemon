import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import PokeDetails from './PokeDetails'


export default class PokemonDetail extends Component {
    state = {
      pokemon:{
        loading: false
      }
    }

    componentDidMount = async() => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({loading: true})
        this.setState({pokemon: response.body,
        loading: false})
    }

    render() {
        console.log(this.state.pokemon)
        return (
            <div>
                <Link to="/Pokemon">Back to The World of Pokemon</Link>

                {this.state.loading}
                {/* ? <img src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif' alt='pokemon' />
                : */}
                    <PokeDetails {...this.state.pokemon} />
                    
            </div>
        )
    }
}
