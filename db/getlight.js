var mysql = require('mysql');
var cp = require('child_process');
var exec = require('child_process').exec;

exports.getDeviceInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : ''
    });

    connection.query('use gatewaydb');
    connection.query('update neighbor set lqi=0', 
        function(err,results,fields) {
            if (err) {
                throw err;
            }
            connection.end();
            var scan = cp.spawn('./zbGateway', ['-s', '-d/dev/ttyUSB0', '-a0000000000000000']);
            scan.on('exit',
                function(code) {
                    console.log('===============scan======================',code);
                    getDevTab(req,res,connection,cp.spawn);
                }
            );
            scan.stdout.on('data',function(data) {console.log('scan stdout:  ',data.length);});
    });
}            

exports.toggleLight = function(req, res) {
    var lightStatus={onoff:0};
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : ''
    });

    connection.query('use gatewaydb');
    connection.query('select onoff from endpoint where net=? and ep=?',[req.params.net,req.params.ep],
        function(err,results,fields) {
            //console.log(results);
            lightStatus.onoff = results[0].onoff;
        });
    var toggleLig = cp.spawn('./zbGateway',['-S2','-d/dev/ttyUSB0','-affffffffffffffff',
        '-n' + req.params.net,'-p01' + req.params.ep]);
    toggleLig.on('exit',
        function(code) {
            if (lightStatus.onoff) {
                res.end('0');
            }
            else {
                res.end('1');
            }
            //console.log(lightStatus.onoff);
        }
    );
}

exports.levelLight = function(req, res) {
    console.log(req.params.net,req.params.ep,req.params.lvl);
    var lvlLig = cp.spawn('./zbGateway',['-L' + req.params.lvl,'-d/dev/ttyUSB0','-affffffffffffffff',
        '-n' + req.params.net,'-p01' + req.params.ep]);
    lvlLig.on('exit',
        function(code) {
            res.end();
        }
    );
}

exports.identifyLight = function(req,res) {
    console.log(req.params.net,req.params.ep);
    var identifyLig = cp.spawn('./zbGateway',['-I10','-d/dev/ttyUSB0','-affffffffffffffff', 
        '-n' + req.params.net,'-p01' + req.params.ep]);
    identifyLig.on('exit',
        function(code) {
            console.log('identify finish',code);
            res.end();
        }
    );
}

getEp = function(cnt,len,net,exec) {
    if (cnt==len) {
        return;
    }
    else {
        //var cmd = '/home/zxd./zbGateway -e -d/dev/ttyUSB0 ' + net[cnt];
        //console.log(cmd);
        //exec(cmd,{},getEp(cnt+1,len,net,exec));
        var sep = exec('./zbGateway', ['-e', '-d/dev/ttyUSB0', net[cnt]]);
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
                    //cp.spawn('/home/zxd./zbGateway', ['-e', '-d/dev/ttyUSB0', '-n3942']);
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

    //console.log(req.params.net);
    //console.log(req.params.ep);
    connection.query('use gatewaydb');

    connection.query('select * from endpoint where net=? and ep=?',[req.params.net,req.params.ep],
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

exports.getOperList = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });

    //console.log(req.params.net);
    //console.log(req.params.ep);
    connection.query('use gatewaydb');

    connection.query('select * from endpoint where inoper=\'true\'',
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
    connection.query('select * from grp where addr != 1', 
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

exports.getEpInfo = function(req,res) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
    });
    var net = req.params.net;
    connection.query('use gatewaydb');

    connection.query('select * from endpoint where net=?',[net],
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
    
    var net = req.params.net;
    var ep = req.params.ep;
    var s = req.body;
    console.log(s.minlevel[0]);
    connection.query('use gatewaydb');
    connection.query('update endpoint set name=?,dimmable=?,minlevel=?,inoper=? where net=? and ep=?',
        [s.name,s.dimmable,s.minlevel[0],s.inoper,net,ep],
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
