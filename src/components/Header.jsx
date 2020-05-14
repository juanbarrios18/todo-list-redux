import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    props.logoutRequest({})
  }
  return (
    <header className='header'>
      <p>Esto es el header</p>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)