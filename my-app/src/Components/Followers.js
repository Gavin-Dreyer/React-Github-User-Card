import React, { Component } from 'react'
import axios from 'axios'

class Followers extends Component {
    constructor(){
        super()
        this.state = {
            followers: []
        }
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/Gavin-Dreyer/followers`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    followers: response.data
                })
            })
            .catch(response => {
                console.log(response)
            })
    }


    render(){
        return (
            <div>
                {this.state.followers.map(item => 
                    <>
                        <div className='personalCard'>
                            <img src={item.avatar_url} alt='Profile'/>
                            <p>{item.login}</p> 
                        </div>
                        
                    </>
                )}
            </div>
        )
    }
}

export default Followers