import React, { PropTypes, Component } from 'react'

class ItemComponent extends Component {
  handleClick(id, action) {
    action(id)
  }

  render() {
    const { item, select } = this.props

    if (item.selected === true) {
      return (
        <li className="item">
          <label className="tablinks active">
            {item.text}
          </label>
        </li>
      )
    }

    return (
      <li className="item">
        <label className="tablinks" onClick={this.handleClick.bind(this, item.id, select)}>
          {item.text}
        </label>
      </li>
    )
  }
}

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired
}

export default ItemComponent
