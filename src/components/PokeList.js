import React, { Component } from 'react'
import PokeItem from './PokeItem'
import { Link } from 'react-router-dom'
export default class PokeList extends Component {
    render() {

        return (
            <ul>
                <Link to="/">Home</Link>
                {this.props.pokeArray.map(poke => (
                    <PokeItem key = {poke.pokemon}
                    image={poke.url_image}
                    name={poke.pokemon}
                    type={poke.type_1}
                    id={poke._id}
                 
                />))}
               
            </ul>
        )
    }
}
