(function () {
    'use strict';
    
    var http = require('http');
    var ecstatic = require('ecstatic');
    var path = require('path');
    var util = require("util");
    var io = require("socket.io");
    var server = null;
    var socket = null;
    var port = 8080;

    activate();

    function activate() {
        createServer();
    };

    function createServer() {
        server = http.createServer(
            ecstatic({ root: path.resolve(__dirname, '../public') })
        ).listen(port, function (e) {
            if (e) {
                console.log(e);
            };

            serverInit();
        });
    };

    function serverInit() {
        server.on('error', function (e) {
            console.log(e);
        });

        socket = io.listen(server);
        console.log(socket);
    };

})();


