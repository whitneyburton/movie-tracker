import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { postData } from '../../api/api'
import './CreateUser.scss'

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      didPost: false,
      error: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const user = { name, email, password };

    try {
      await postData('users/new', user)
      this.setState({
        didPost: true
      })
    } catch (error) {
      this.setState({
        error: error.message
      })
    }
  }

  render() {
    const { didPost, error } = this.state
    return (
      didPost ?
        <Redirect to='/' /> :
        <form className='CreateUser'>
          <input
            className='user-input'
            placeholder='Name'
            required type='text'
            onChange={this.handleChange}
            name='name' />
          <input
            className='user-input'
            placeholder='Email'
            required type='email'
            onChange={this.handleChange}
            name='email' />
          <input
            className='user-input'
            placeholder='Password'
            required type='password'
            onChange={this.handleChange}
            name='password' />
          <button
            className='submit-user'
            type='submit'
            onSubmit={this.handleSubmit}>Submit
            </button>
          {error && <h3>{error}</h3>}
        </form>
    )
  }
}

export default CreateUser;
