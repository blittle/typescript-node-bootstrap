Typescript Bootstrap for Node Apps
====================

A bootstrap repo for getting up and running with NodeJS applications written in TypeScript. Specifically, 
the repo is tied to work with IntelliJ and/or GruntJS.

Clone the repository and run `npm install` to install the project dependencies.

## Setting up IntelliJ
The project requires IntelliJ 11. Because the IntelliJ project files are commited within the repository, simply 
open the project directly within IntelliJ. Make sure that the NodeJS and File Watchers plugins are installed. 

The included Jasmine and Node tasks will need to be modified to have the correct node path. The file watcher plugin
will also need to be modified to correctly point to the TypeScript compile executable. 

## Setting up Grunt
Install GruntJS with `npm install -g grunt-cli`. The default grunt task (execute `grunt` at the command line) will 
compile the TypeScript into JavaScript and run the Jasmine tests.
