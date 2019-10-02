import React from 'react';
import axios from 'axios';
import Usercard from './UserCard'
import Followers from './Followers'

const githubUserAPI = 'https://api.github.com/users/jrgrantham';
const githubFollowersAPI = 'https://api.github.com/users/jrgrantham/followers';


export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      userFollowers: [],
    }
  }

  componentDidMount() {
    axios.get(githubUserAPI)
      .then(response => {
        this.setState({ userInfo: response.data});
        console.log(response.data)
      })
    axios.get(githubFollowersAPI)
      .then(response => {
        this.setState({ userFollowers: response.data })
        console.log(response.data)
      })
  }

  render() {
    return(
      <>
        <Usercard userInfo={this.state.userInfo} />
        <Followers userFollowers={this.state.userFollowers} />
        {/* <h3>{this.state.userInfo.name}</h3>
        <p>{this.state.userInfo.login}</p>
        <img src={this.state.userInfo.avatar_url} alt="profile"/>
        <p>GitHub handle: {this.state.userInfo.html_url}</p>
        <p>Based in {this.state.userInfo.location}</p>
        <p>Following: {this.state.userInfo.followers}, followers</p><p>{this.state.userInfo.followers}</p>
        <p>{this.state.userInfo.following}</p> */}
      </>
    )
  }
}