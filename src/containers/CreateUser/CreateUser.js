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
        <Redirect to='/' />
        :
        <form className='CreateUser'>
          <input required onChange={this.handleChange} name='name' />
          <input required onChange={this.handleChange} name='password' />
          <input required onChange={this.handleChange} name='email' />
          <button type='submit' onClick={this.handleSubmit}>Submit</button>
          {error && <h3>{error}</h3>}
        </form>

    )
  }
}

export default CreateUser;
