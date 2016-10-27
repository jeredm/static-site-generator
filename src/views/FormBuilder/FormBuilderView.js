import React, { Component } from 'react'
import FormBuilder from './components/FormBuilder'
import UserAvatar from './components/UserAvatar'
import context from './context.json'

export class FormBuilderView extends Component {
  render() {
    return (
      <div>
        <FormBuilder context={context} />
        <UserAvatar {...context} />
      </div>
    )
  }
}
