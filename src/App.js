import React from "react";
import Chat from "./chat/Chat.js";
import * as auth from "./auth.js";


class App extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.setState = {
      userProfile: null
    }
  }
  componentDidMount() {
    if (auth.isUserSignedIn()) {
      var person = new blockstack.Person(blockstack.loadUserData())
      this.setState(person.profile())
    }
  }
  render() {
    if (userProfile && userProfile.name) {
      return <Chat userProfile={this.state.userProfile} />;
    }
    return <section id="section-1">
            <button id="signin-button">Sign In</button>
          </section>;

  }
}
export default App;