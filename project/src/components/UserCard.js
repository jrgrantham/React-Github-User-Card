import React from 'react';

export default class Usercard extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.userInfo.name}</h3>
        <p>{this.props.userInfo.login}</p>
        <img src={this.props.userInfo.avatar_url} alt="profile" />
        <p>GitHub handle: {this.props.userInfo.html_url}</p>
        <p>Based in {this.props.userInfo.location}</p>
        <p>Following: {this.props.userInfo.followers}. Followers: {this.props.userInfo.following}</p>
      </div>
  )}
}

