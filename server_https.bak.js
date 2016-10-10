var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();
//var express = require('express');
var path = require('path');
//var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/gen'));

/*app.get('/service-worker.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/service-worker.js'));
});*/


app.get('/*', function(req, res) {
    /*res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.*/
    res.sendFile(path.join(__dirname + '/index.html'));
});

//app.listen(3000);
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase:"omega"
}, app).listen(3000);
