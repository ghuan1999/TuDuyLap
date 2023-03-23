"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var w = Number((0, readline_sync_1.question)("w = "));
var h = Number((0, readline_sync_1.question)("h = "));
for (var i = 1; i <= h; i++) {
    var s = "";
    for (var j = 1; j <= w; j++) {
        s += "* ";
    }
    console.log(s);
}
