import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
         <li>
             <img src={this.props.image} alt={this.props.name}></img>
             {this.props.name}
            
         </li>
        )
    }
    
}
