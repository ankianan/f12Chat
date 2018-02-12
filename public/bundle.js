function loadJS(file) {
  return new Promise(function(resolve, reject) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // attach onload
    jsElm.onload = function onload() {
      resolve();
    }
    // finally insert the element to the body element in order to load the script
    document.head.appendChild(jsElm);
  })

}

function register(myId) {
  var peer = new Peer(myId, {
    key: 'bixfuxcgpjw3tyb9'
  });

  peer.on('connection', function(conn) {
    conn.on('data', function(data) {
      console.log("%c " + data + " ", "background:#e2e2e2; border-radius:5px;");
    });
  });

  window.connect = function connect(other) {
    var conn = peer.connect(other);
    conn.on('open', function() {
      window.send = function send(message) {
        console.log("%c " + message + " ", "background:#33F157; border-radius:5px;");
        conn.send(message);
        return "....";
      }
    });
  };
}


var connect = send = function(message) {
  console.log("wait a second");
}

loadJS("https://cdn.rawgit.com/ankit90anand/f12Chat/master/peer.js").then(function() {
  console.log("Type register(your name), connect(friend name), send(message)");
  if (blockstack.isUserSignedIn()) {
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'
    var person = new blockstack.Person(blockstack.loadUserData())
    console.log(person.name() || person.profile().profile.name);
    //register(person.name())
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = window.location.origin
    });
  }

})


document.getElementById('signin-button').addEventListener('click', function(event) {
  event.preventDefault()
  blockstack.redirectToSignIn()
})
document.getElementById('signout-button').addEventListener('click', function(event) {
  event.preventDefault()
  blockstack.signUserOut(window.location.href)
})
