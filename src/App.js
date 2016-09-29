import React, { Component } from 'react'
import FormBuilder from './FormBuilder'
import context from './context.json'
import UserAvatar from './UserAvatar'

class App extends Component {
  render() {
    return (
      <div>
        <FormBuilder context={context} />
        <UserAvatar {...context} />
      </div>
    )
  }
}

export default App
