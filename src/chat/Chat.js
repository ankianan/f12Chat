import React from "react";
import ChatList from "./ChatList.js";
import PropTypes from 'prop-types';

class Chat extends React.PureComponent {
  static propTypes = {
    userProfile: PropTypes.object
  }
  constructor() {
    super(...arguments);
    this.state = {
      selectedPeerProfile: null
    }
  }
  componentDidMount() {
    document.getElementById('signout-button').addEventListener('click', function(event) {
      event.preventDefault()
      blockstack.signUserOut(window.location.href)
    })
  	
  }
  setSelectedPeerProfile(profile) {
    this.setState({
      selectedPeerProfile: profile
    });
  }
  render() {
    return <div>
      <button id="signout-button">Sing Out</button>
			<ChatMembers onSelect={setSelectedPeerProfile} />
			{selectedPeerProfile && <ChatList userProfile={this.props.userProfile} peerProfile={this.state.selectedPeerProfile} />}
		</div>
  }
}


export default Chat;
