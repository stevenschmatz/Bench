/**
 * Created by stevenschmatz on 2/4/14.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);