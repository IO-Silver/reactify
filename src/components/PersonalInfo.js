import React, { Component } from 'react'

class PersonalInfo extends Component {
  render(props) {
    return <h1>{props.full_name}</h1>
  }
}

export default PersonalInfo