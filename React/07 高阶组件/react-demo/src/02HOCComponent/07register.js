import React, { Component } from 'react'
import PropUsername from './04usernam'

export class Register extends Component {
    render() {
        return (
            <div>
                <h1>login</h1>
                <p>{this.props.username}注册了</p>
            </div>
        )
    }
}

export default PropUsername(Register)
