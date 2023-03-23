"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var n = Number((0, readline_sync_1.question)("n = "));
var S = 0;
for (var i = 1; i <= n; i++) {
    S += i;
}
console.log(S);
