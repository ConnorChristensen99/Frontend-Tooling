//Possibly one of the nicest things about Rollup is the Tree-Shaking ability.

//Essentially, based on the syntax used Rollup is able to grab just the needed functions from an imported file rather than adding all of the dependencies into the project,
//just making it far more hectic.

const myDeps = require('./deps.js')
//This line here shows what would normally be needed, which would pull all of the functions from the specified file.

export function myLibrary() {
    myDeps.functionOne();
    myDeps.functionTwo();
    myDeps.functionThree();
}
//As you can see, we are having to access the file and then pull the functions out when exporting the library.



import { functionOne, functionTwo, functionThree } from './deps';
//This used line just pulls the needed functions from the file

export function myLibrary2() {
    functionOne();
    functionTwo();
    functionThree();
}
//Because we only pulled the needed functions, we can just declare them