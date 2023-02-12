(function () {
    'use strict';

    function functionOne(){
        console.log();
    }

    function functionTwo(){
        console.log();
    }

    function functionThree(){
        console.log();
    }

    // const myDeps = require('./deps.js')

    function myLibrary() {
        //start commenting out functions and see the results
        functionOne();
        functionTwo();
        functionThree();
    }

    return myLibrary;

})();
