import React from 'react'

export default class Hello extends React.Component {
  render() {
    return <div>おっす、{this.props.name}さん</div>
  }
}