"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var m = Number((0, readline_sync_1.question)("m = "));
var n = Number((0, readline_sync_1.question)("n = "));
for (var i = m; i <= n; i++) {
    if (i % 6 == 0) {
        console.log(i);
        break;
    }
}
