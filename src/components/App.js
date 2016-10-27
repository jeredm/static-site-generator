import React, { Component } from 'react'
import { FormBuilderView } from '../views/FormBuilder'
import { EditView } from '../views/Edit'
import { Menu, Accordion } from 'semantic-ui-react'

const menuItems = [
  { name: 'Form Builder' },
  { name: 'Edit' },
]

class App extends Component {
  state = { activeItem: 'Edit' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  renderView = () => {
    const { activeItem } = this.state

    if (activeItem === 'Edit') return <EditView />
    if (activeItem === 'Form Builder') return <FormBuilderView />

    return <div>Unknown activeItem: {activeItem}</div>
  }

  render() {
    return (
      <div>
        <Menu items={menuItems} onItemClick={this.handleItemClick} />
        {this.renderView()}
      </div>
    )
  }
}

export default App
