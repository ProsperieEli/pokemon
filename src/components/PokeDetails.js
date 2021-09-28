import React, { Component } from 'react'
export default class PokeDetails extends Component {
    render() {
        return (
            <div>
                 <img src={this.props.url_image} alt={this.props.name} />
                 <div>
                   {this.props.pokemon}
                   </div>
                   <div>
                   {this.props.type_1}
                   </div>
                   <div>
                   {this.props.type_2}
                   </div>
          </div>
        )
    }
}
