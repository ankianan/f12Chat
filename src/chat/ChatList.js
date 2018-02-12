import React from "react";
import PropTypes from 'prop-types';
import { fetchChat, saveChat } from "../storage.js";
import * as schema from "../schema.js";

const defaultSentMessage = [];
const defaultViewedMessage = [];

class ChatList extends React.PureComponent {
  static propTypes = {
    userProfile: PropTypes.object,
    peerProfile: PropTypes.object
  };
  static getTimePassedSinceStr = (timestamp, sinceTimeStamp) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const diffTime = sinceTimeStamp - timestamp;
    let dueDateStr = "";

    if (Math.abs(diffTime) > oneDay) {

      let daysAgo = parseInt(Math.round(Math.abs(diffTime) / oneDay));
      let dayStr = daysAgo > 1 ? `days` : `day`;

      if (diffTime > 0) {
        dueDateStr = `${daysAgo} ${dayStr} ago`;
      } else {
        dueDateStr = `Due in ${daysAgo} ${dayStr}`
      }

    } else if (Math.abs(diffTime) > oneHour) {

      let hoursAgo = parseInt(Math.round(Math.abs(diffTime) / oneHour));
      let hourStr = hoursAgo > 1 ? `hours` : `hour`;

      if (diffTime > 0) {
        dueDateStr = `${hoursAgo} ${hourStr} ago`;
      } else {
        dueDateStr = `Due in ${hoursAgo} ${hourStr}`
      }

    } else if (Math.abs(diffTime) > oneMinute) {

      let minutesAgo = parseInt(Math.round(Math.abs(diffTime) / oneMinute));
      let minuteStr = minutesAgo > 1 ? `mins` : `min`;

      if (diffTime > 0) {
        dueDateStr = `${minutesAgo} ${minuteStr} ago`;
      } else {
        dueDateStr = `Due in ${minutesAgo} ${minuteStr}`;
      }
    } else {
      dueDateStr = "Now";
    }
    return dueDateStr;
  };
  static createMessage = ({ text, senderName }) => {
    const timeStamp = new Date().getTime();
    return { ...schema,
      id: timestamp,
      timestamp: timestamp,
      text,
      senderName
    }
  }
  constructor() {
    super(...arguments);
    this.lastMountTimestamp = "";
    this.sentMessage = defaultSentMessage; //Store sent messages for backup on peer change
    this.state = {
      messages: defaultViewedMessage
    };
  }
  componentDidMount() {
    this.refreshChatList()
  }
  componentWillReceiveProps(nextProps) {
    //On changing peer backup, previous peer sent messages
    if (nextProps.peerProfile != this.props.peerProfile) {
      saveChat(this.props.userProfile.name, this.props.peerProfile.name, this.sentMessage);
      this.refreshChatList();
    }
  }
  submitMessage(event) {
    const text = event.target.elements["textMessage"].value;
    const senderName = this.props.userProfile.name;
    const sendMessage = ChatList.createMessage({ text, senderName });
    this.setState({
      messages: this.state.messages.concat(sendMessage)
    });
    this.sentMessages.push(sendMessage);
  }
  refreshChatList() {

    let { userProfile, peerProfile } = this.props;
    this.sentMessages = defaultSentMessage.concat([]);
    this.lastMountTimestamp = new Date().getTime();
    this.setState({
      messages: defaultViewedMessage
    });

    if (userProfile.name && peerProfile.name) {
      fetchChat(userProfile.name, peerProfile.name).then(({
        messages,
        sentMessages
      }) => {
        this.setState({
          messages: messages
        });
        this.sentMessages = sentMessage;
      })
    }
  }
  render() {
    return <div>
            <div class="collection with-header">
                <div class="collection-header">{props.peerProfile.name}</div>
                {messages.map((message)=>{
                  return <div class="collection-item">
                      {message.text}
                      {ChatList.getTimePassedSinceStr(message.timestamp,this.lastMountTimestamp)}
                  </div>;       
                })}            
            </div>
            <form onSubmit={this.submitMessage}>
              <input type="text" name="textMessage" />
              <input type="submit" />
            </form>
          </div>
  }
}



export default ChatList;
