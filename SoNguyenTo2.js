"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var m = Number((0, readline_sync_1.question)("m = "));
var conf = 0;
for (var i = 1; i <= m; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            conf = 1;
            break;
        }
    }
    if (conf == 0)
        console.log(i);
    conf = 0;
}
