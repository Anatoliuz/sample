'use strict'
let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let counters = {};
app.use('/', express.static('public'));


app.use(parser.json());
//app.use(technologger);

//let foo ={};
//foo.name === undefined
app.post('/users', (req, res) => {
    console.log(req.body);
    let email = req.body.email;

    if(!(email in counters)){
        console.log(email, counters);
        counters[email] = 0;
    }
    ++counters[email];
    console.log(counters[email]);

    res.send(counters[email] + '');
    // TODO: вернуть количество обращений
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
