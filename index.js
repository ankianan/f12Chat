function loadJS(file) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // attach onload
    jsElm.onload = function onload() {
            console.log("Type register(your name), connect(friend name), send(message)");
        }
        // finally insert the element to the body element in order to load the script
    document.head.appendChild(jsElm);
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
loadJS("http://cdn.peerjs.com/0.3/peer.js");
