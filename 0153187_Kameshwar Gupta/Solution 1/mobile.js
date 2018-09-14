var express = require('express');
var exp = express();
var cors = require('cors');
var fs = require('fs');
var parser = require('body-parser');
var appendData = require('./mobile.json');
exp.use(cors())


// Displaying All Mobiles Data

exp.route('/rest/api/get', cors()).get((req, res) => {
    console.log("GET Invoked");
    var Strdata = JSON.stringify(appendData);
    res.send(Strdata);
});



// Mobile belonging to range 10000 to 50000

exp.route('/rest/api/getdataonrange', cors()).get((req, res) => {
    console.log("GET Mobile of price between 10,000 to 50,000.");
    fs.readFile('mobile.json', function (err, mobiledata) {
        if (err) throw err;
        let rawdata = JSON.parse(mobiledata.toLocaleString());
        for (let data of rawdata)
            if (data.mobPrice >= 10000 && data.mobPrice <= 50000) {
                console.log("Mobile id : " + data.mobId + ", Mobile Name : " + data.mobName + ", Price : " + data.mobPrice);
            }
        res.end();
    })
});


// Updating Mobile name based on their Id
//Please enter the Id after the URL ex.http://localhost:3001/rest/api/put/1002

exp.route('/rest/api/put/:mobId', cors()).put((req, res) => {
    console.log("PUT Invoked");
    let rawdata = fs.readFileSync('mobile.json');
    let mobile = JSON.parse(rawdata);
    for (mob of mobile) {
        if (mob.mobId == req.params.mobId) {
            mob.mobName = "Samsung";
            fs.writeFile('mobile.json', JSON.stringify(mobile))
            console.log(mobile);
            res.status(201).send(mob);
        }
    }
});


// Adding New Mobile details to the mobile.json file

exp.use(parser.json());
exp.route("/rest/api/post", cors()).post((req, res) => {
    //console.log(req.body);
    console.log("Post Invoked");
    appendData.push(req.body)
    console.log(appendData)
    fs.writeFileSync('mobile.json', JSON.stringify(appendData))
    res.status(201).send(appendData);
});



exp.use(cors()).listen(3001, () => console.log("Running....."))