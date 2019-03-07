import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions'
import Friend from './Friend';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <h1>Friends List</h1>
    )
  }
}

export default connect(null, { getFriends })(FriendsList)
