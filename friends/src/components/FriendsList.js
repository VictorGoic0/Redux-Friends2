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
      this.props.friends.map(friend => <Friend key={friend.id} />)
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends
})

export default connect(mapStateToProps, { getFriends })(FriendsList)
