let express = require('express');
let fs = require('fs');
var util = require('util');
const cors = require('cors');
let body_parser = require('body-parser');
let utf8 = require('utf8');

let app = express();
app.use(body_parser.urlencoded({
        extended : true
}));

var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
        }
app.use(cors(corsOptions));

app.post('/truc', function(req, response) {

    console.log("JE SUIS ICI");

    console.log("body = "+util.inspect(req.body));
    console.log(req.body.login)
    response.send("ANTHONY BERGNEL");    
});

app.listen(4000, function() {
            console.log('Serveur démarré (4000)');
})

//   http://localhost:4000/auth