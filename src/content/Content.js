// Conditionnal shown
import * as constants from '../Constants'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Content extends Component {
  render() {
    const { items, logged } = this.props
    let condition = constants.MUST_UNLOGGED | constants.NO_CONDITION

    if (logged) {
      condition = constants.MUST_LOGGED | constants.NO_CONDITION
    }

    let filteredItem = items.find((item) => 
    	((condition === (item.condition | condition)) && item.selected)
	  )

    const Tag = filteredItem.tag;

    return (<Tag />)
  }
}

Content.propTypes = {
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
)(Content)
