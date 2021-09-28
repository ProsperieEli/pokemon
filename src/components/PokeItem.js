import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PokeItem extends Component {
    render() {
        return (
         <li>
            
             <Link to={`/Pokemon/${this.props.id}`}>
             <img src={this.props.image} alt={this.props.name}></img>
             </Link>
             {this.props.name}
             
            
         </li>
        )
    }
    
}
