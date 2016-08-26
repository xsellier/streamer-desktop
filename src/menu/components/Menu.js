import React, { PropTypes, Component } from 'react'
import * as constants from '../../Constants'
import ItemComponent from './Item'

class MenuComponent extends Component {
  render() {
    const { items, logged, actions } = this.props
    let condition = constants.MUST_UNLOGGED | constants.NO_CONDITION
    let filteredItems = []

    if (logged) {
      condition = constants.MUST_LOGGED | constants.NO_CONDITION
    }

    filteredItems = items.filter((item) =>
      condition === (item.condition | condition)
    )

    return (
      <div>
        <h1>Twitch desktop</h1>
        <ul className="tab">
            {filteredItems.map(item =>
              <ItemComponent key={item.id} item={item} select={actions.select} />
            )}
        </ul>
      </div>
    )
  }
}

MenuComponent.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  logged:  PropTypes.bool.isRequired
}

export default MenuComponent
