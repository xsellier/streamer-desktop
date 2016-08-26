// Conditionnal shown
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (<label>Bienvenue dans le login</label>)
  }
}

Login.propTypes = {
  items: PropTypes.array.isRequired,
  logged: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.menu.items,
    logged: state.menu.logged
  }
}

export default connect(
  mapStateToProps
)(Login)
