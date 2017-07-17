// Timer object makes it easier to time the execution of a function
// or just a block of code by using the various functions provided.
var timer = (function timer() {
    "use strict";

    var startTime = null,
        endTime = null;

    return {
        start: function () {
            startTime = Date.now();
        },
        end: function () {
            endTime = Date.now();
        },
        getTime: function () {
            return endTime - startTime;
        },
        time: function (cb, thisArg = null, ...args) {

            this.start();

            cb.apply(thisArg, args);

            this.end();
            
            return this.getTime();

        },
        runtimeOfFunction: function(cb, thisArg = null, ...args) {
            this.time(cb, thisArg, args);
            console.log(cb.name, "took", `${this.getTime()}ms`);
        }
    };
})();