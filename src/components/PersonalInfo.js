import React, { Component } from 'react'

class PersonalInfo extends Component {
  render(props) {
    return <div>
            <h1>{props.full_name}</h1>
            <p>
              {props.degree} <br>
              {props.email} <br>
              {props.phone}
            </p>
          </div>

  }
}

export default PersonalInfo