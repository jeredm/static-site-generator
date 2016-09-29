import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Form } from 'stardust'

export const parseContext = (context) => {
  const formDescription = {
    fields: [],
  }

  _.each(context, (val, key) => {
    if (_.isNumber(val)) {
      formDescription.fields.push({
        name: key,
        control: {
          element: 'input',
          type: 'number'
        }
      })
    }
    if (_.isString(val)) {
      if (val.length < 120) {
        formDescription.fields.push({
          name: key,
          control: {
            element: 'input',
            type: 'text',
          },
        })
      }
    }
  })

  return formDescription
}

class FormBuilder extends Component {
  static propTypes = {
    context: PropTypes.object,
  }

  renderFields = () => {
    const { context } = this.props
    const formDescription = parseContext(context)

    return (
      <Form.Group>
        {_.map(formDescription.fields, ({ control, name }) => {
          const startCase = _.startCase(name)
          const { element, ...elementProps } = control

          return (
            <Form.Field
              label={startCase}
              control={element}
              placeholder={startCase}
              name={name}
              {...elementProps}
            />
          )
        })}
      </Form.Group>
    )
  }

  render() {
    return (
      <Form>
        {this.renderFields()}
      </Form>
    )
  }
}

export default FormBuilder
