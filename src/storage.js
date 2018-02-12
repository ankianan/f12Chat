
const todaysDate = new Date();

const getFileName = (username = "", date = todaysDate) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  return `${username}_${dd}/${mm}/${yyyy}.json`
}

const mergeMessages = (sentMessages = [], receivedMessages = []) => {
  return sentMessages.concat(receivedMessages).sort((a, b) => {
    return a.timestamp > b.timestamp;
  })
}

const fetchChat = (username = "", peerUsername = "", date = todaysDate) => {
  const sentMessagePromise = getFile(getFileName(peerUsername, date), { username: username })
    .then((file) => {
      return JSON.parse(file || '[]')
    });
  const receivedMessagePromise = getFile(getFileName(username, date), { username: peerUsername })
    .then((file) => {
      return JSON.parse(file || '[]')
    });
  return Promise.all([sentMessagePromise, receivedMessagePromise], (sentMessages, receivedMessages) => {
    return {
      messages: mergeMessages(sentMessages, receivedMessages),
      sentMessages: sentMessages
    };
  })
}


const saveChat = (username = "", peerUsername = "", sentMessages = []) => {
  const now = new Date();
  const fileName = getFileName(peerUsername, now);
  return putFile(fileName, JSON.stringify(sentMessages));
}


export { fetchChat, saveChat }
