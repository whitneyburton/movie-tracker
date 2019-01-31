import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {addUser} from '../../actions'


class CreateUser extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password:'',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]:value,
    })
  }

  handleSubmit = async () => {
   var response= await fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(this.state)
   })
    console.log(response)
  }

  render() {
   
    return (<form>
      <input required onChange={this.handleChange} name='name'/>
      <input required onChange={this.handleChange} name='password'/>
      <input required onChange={this.handleChange} name='email' />
      <NavLink onClick={this.handleSubmit} to='/'>Submit</NavLink>
    </form>
    )
  }
}

export default CreateUser;