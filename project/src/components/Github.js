import React from 'react';
import axios from 'axios';

const githubAPI = 'https://api.github.com/users/jrgrantham'

export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    }
  }

  componentDidMount() {
    axios.get(githubAPI)
      .then(response => {
        this.setState({ userInfo: response.data});
        console.log(response.data)
      })
  }

  render() {
    return(
      <p>{this.state.userInfo.name}</p>
    )
  }
}