import React, { Component } from 'react'
import axios from 'axios'

import Followers from './Followers'

class Card extends Component {
    constructor() {
        super ()
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/Gavin-Dreyer`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cards: response.data
                })
            })
            .catch(response => {
                console.log(response)
            })
    }

    render(){
        return (
            <div className="cardContainer">
                <div className='personalCard'>
                    <img src={this.state.cards.avatar_url} alt='Profile' />
                    <p>
                        {this.state.cards.name}
                    </p>
                    <p>
                        {this.state.cards.bio}
                    </p>
                    <p>
                        {this.state.cards.location}
                    </p>
                </div>
                <div>
                    <Followers />
                </div>
            </div>
        )
    }
}

export default Card