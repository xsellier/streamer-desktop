import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MenuComponent from './components/Menu'
import * as Actions from './Actions'

class Menu extends Component {
  render() {
    const { items, logged, actions } = this.props
    return (
      <div>
        <MenuComponent logged={logged} items={items} actions={actions} />
      </div>
    )
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  logged: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.menu.items,
    logged: state.menu.logged
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
