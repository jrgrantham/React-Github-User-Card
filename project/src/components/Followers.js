import React from 'react';

export default class Followers extends React.Component {
  
  render () {
    // console.log(this.props.userFollowers)
    return (
      <div>
        <h2>Followers</h2>
        <div>
          {this.props.userFollowers.map(follower => (
            // console.log(follower.login)
            <div key={follower.id}>
              <img src={follower.avatar_url} alt='selfie' />
              <p>{follower.login}</p>
            </div>
          ))}
        </div>

        {/* <h3>{this.props.userInfo.name}</h3>
        <p>{this.props.userInfo.login}</p>
        <img src={this.props.userInfo.avatar_url} alt="profile" />
        <p>GitHub handle: {this.props.userInfo.html_url}</p>
        <p>Based in {this.props.userInfo.location}</p>
        <p>Following: {this.props.userInfo.followers}, followers</p>
        <p>{this.props.userInfo.followers}</p>
        <p>{this.props.userInfo.following}</p> */}
      </div>
  )}
}