// Conditionnal shown
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    return (<div>
      <label>Bienvenue dans le about</label>
      <img src='img/logo-binomatic.png' width='350px' />
      </div>
      )
  }
}

About.propTypes = {
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
)(About)
