# Frontend Tooling

### Chosen Tools: Turbopack, Rollup, Vite
</h>

## What problem is this tool trying to solve?
The main problem that all of these tools are solving seems to be slow load up speeds of an app or website through the use of bundling. 

## How does it solve the problem? AKA, what makes this tool unique?
Taking multiple pieces of small code and bundling it in a way that it can be loaded quickly by the browser.

## When shouldn't you use this tool?
It seems that the main time that you should not use these tools is when you are dealing with straight vanilla JS and no frameworks or modules in your project, as their whole use is to bundle said modules. 
<br>The final time it makes sense to not use the tool is on smaller projects. If you aren’t planning on loading a project with files and dependencies, it may be too much of a hassle to install anyway.

## Name two features you find interesting/useful and explain why they are helpful.
Vitest - Vite has a testing framework built in that gives you an HTML file with the results. Seems to be faster and more visually appealing than Jest.<br>
Tree Shaking - Rollup has a pretty cool feature known as tree-shaking. What this does is sift through the code being added from a module that has been installed and only gives the necessary code to make the project run rather than having a list of dependencies that aren’t being used. 

## What other information should someone know before using this tool?
Vite actually seems to preconfigure Rollup for you when you are installing it. This gives you the best and fastest defaults and plugins for your development. <br> 
The final thing to note, is that interestingly enough Turbopack will save, even individual, functions into its cache. This allows it to perform a task once and never again, dramatically reducing the time it takes for actions to be completed. 
