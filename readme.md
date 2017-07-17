Timer
=====

Timer is a Javascript object used to make calculating the runtime of a particular function/block of code easier to deal with.

Usage
-----

#### #start()
    
    // Will record the starting time before the next section of code is executed.
    timer.start();

#### #end()

    // Records the end time just after the execution of a section of code.
    // Also update the time it took the code to run.
    timer.end();

#### #getTime()
    
    // NOTE: Must be called after end().
    // Returns the time it took for a section of code to execute.
    var runtime = timer.getTime();

#### #time(cb, thisArg, ...args)

    // Records and returns the runtime of the function passed in, in milliseconds.
    // cb - Function whose runtime is needed.
    // thisArg - If a special object needs to used as this for the function(cb)
    //           passed in as thisArg. Default: null
    // args - All additional arguments passed to time() will be passed to the 
    //        function passed in.
    var runtime = timer.time(foo, {name: "foo"}, "string passed to foo", 1024);

    function foo(str, num) {
        console.log(str, num);
        console.log(this.name);
    }

#### #runtimeOfFunction(cb, thisArg, ...args)

    // Prints out a string of the format "foo(function name) took 59ms".
    // cb - Function to record the runtime of. Cannot be an anonymous function.
    // thisArg - Object to be used as the this value for the function passed in.
    //           Default: null
    // args - Holds all additional argument passed to runtimeOfFunction(). These
    //        arguments will be passed as arguments to cb.
    timer.runtimeOfFunction(bar, null, "some", "arguments"); // prints "bar took Xms"

    function bar(arg1, arg2) {
        // function body...
    }