import React from 'react'
import propTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }
  static getDeerivedStateFromError() {
    return { isError: true }
  }
  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }
}
