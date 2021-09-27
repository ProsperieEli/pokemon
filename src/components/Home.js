import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Hello! Welcome to the World of Pokemon!</p>
                <Link to="/Pokemon">View Pokemon!</Link>
            </div>
        )
    }
}
