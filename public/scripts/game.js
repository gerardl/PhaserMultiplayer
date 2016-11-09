(function () {
    'use strict';
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
    var socket;

    function preload () {};
    function create () {
        socket = io.connect();
    };
    function update () {};
    function render () {};
})();

