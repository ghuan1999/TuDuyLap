"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var n = Number((0, readline_sync_1.question)("n = "));
var conf = 0;
for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        conf = 1;
        break;
    }
}
if (conf == 0)
    console.log("Yes");
else
    console.log("No");
