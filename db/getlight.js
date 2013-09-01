var mysql = require('mysql');

exports.getDeviceInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });

    connection.query('use gatewaydb');

    connection.query('select * from neighbor where net != \'0000\'',
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            res.contentType('json');
            res.send(results);
            res.end();
            connection.end();
        });
}

exports.getLightInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });

    connection.query('use gatewaydb');

    connection.query('select * from light where net=\'4eeb\'',
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            res.contentType('json');
            res.send(results);
            res.end();
            //console.log(results);
            //console.log(fields);
            connection.end();
        });
}

exports.getGroupInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });

    connection.query('use gatewaydb');

    connection.query('select * from grp ',
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            res.contentType('json');
            res.send(results);
            res.end();
            //console.log(results);
            //console.log(fields);
            connection.end();
        });
}

exports.updateLightInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });
    
    var s = req.body;
    console.log(s.dimmable);
    connection.query('use gatewaydb');
    connection.query('update light set lightname=?,dimmable=?,minlevel=? where net=?',
        [s.lightname,s.dimmable,s.minlevel,s.net],
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            //res.contentType('json');
            //res.send(results);
            res.end();
            //console.log(results);
            //console.log(fields);
            connection.end();
        });

}
