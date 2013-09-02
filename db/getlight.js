var mysql = require('mysql');
var cp = require('child_process');
var exec = require('child_process').exec;

exports.getDeviceInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });

    connection.query('use gatewaydb');
    connection.query('update neighbor set lqi=0', 
        function(err,results,fields) {
            if (err) {
                throw err;
            }
            var scan = cp.spawn('/home/zxd/workspace/zbGateway/Debug/zbGateway', ['-s', '-d/dev/ttyUSB0', '-a0000000000000000']);
            scan.on('exit',
                function(code) {
                    console.log('===============scan======================',code);
                    //console.log('',scan.stdout._readableState.buffer);
                    getDevTab(req,res,connection,cp.spawn);
                }
            );
            scan.stdout.on('data',function(data) {console.log('scan stdout:  ' + data);});
    });
}            

getEp = function(cnt,len,net,exec) {
    if (cnt==len) {
        return;
    }
    else {
        //var cmd = '/home/zxd/workspace/zbGateway/Debug/zbGateway -e -d/dev/ttyUSB0 ' + net[cnt];
        //console.log(cmd);
        //exec(cmd,{},getEp(cnt+1,len,net,exec));
        var sep = exec('/home/zxd/workspace/zbGateway/Debug/zbGateway', ['-e', '-d/dev/ttyUSB0', net[cnt]]);
        sep.on('exit',
            function(code) {
            getEp(cnt+1,len,net,exec)
            });
        //sep.stdout.on('data',function(data) {console.log('stdout:  ' + data);});
    }
}

getDevTab = function(req,res,connection,exec) {
    var cnt = 0;
    var na = new Array();
    connection.query('select * from neighbor where net != \'0000\' and lqi != 0',
        function getep(err, results,fields) {
            console.log('-------------------getep-------------------');
            results.forEach(
                function(record) {
                    na[cnt] = '-n' + record['net'];
                    console.log(cnt,na);
                    cnt++;
                    //cp.spawn('/home/zxd/workspace/zbGateway/Debug/zbGateway', ['-e', '-d/dev/ttyUSB0', '-n3942']);
                }
            );
            cnt = 0;
            getEp(cnt,na.length,na,exec);
        }
    );
    //console.log('scaned');
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
