import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    this.props.primaryUser ? console.log(this.props.primaryUser.userName) : null

    return (
      <div>
        <ul>
          {this.props.users ? this.props.users.map(user => (
            <li>
              <h3>{user.userName}</h3>
              <h4>{user.hometown}</h4>
            </li>
          )) : null}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
     primaryUser: state.users[0]}
}

export const UsersWithProps = connect(mapStateToProps)(Users)
