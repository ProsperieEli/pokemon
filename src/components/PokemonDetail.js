import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request, { get } from 'superagent'

export default class PokemonDetail extends Component {
    state = {
        _id: ''
    }

    componentDidMount = async() => {
        const response = await request.get('')
        
        this.setState({_id: response.body})
    }

    render() {
        return (
            <div>
                <Link to="/Pokemon">Back to The World of Pokemon</Link>
            </div>
        )
    }
}
