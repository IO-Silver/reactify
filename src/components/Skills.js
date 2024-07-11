import React, { Component } from 'react'

class Skills extends Component {
  render(props) {
    return <ul>
            <li>{props.skills[0]}</li>
            <li>{props.skills[1]}</li>
            <li>{props.skills[2]}</li>
           </ul>
  }
}

export default Section