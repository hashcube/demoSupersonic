demoSupersonic
===========================

##DevKit Supersonic Module Demo

Showcases using the supersonic module for the GameClosure DevKit.

##Prerequisites:

You need devkit installed to run this game. Please follow the devkit
installation instructions.


##Quick Start:

Clone this project:

`git clone git@github.com:hashcube/demoSupersonic`

Change into the game directory:

`cd demoSupersonic`

Add Devkit to the project (and register with the simulator). This will also
install all the dependencies.

`devkit install`

You have want to update the manifest with your own supersonic/ironSource
keys.


Build to device to run the demo.

`devkit debug native-android`

`devkit debug native-ios`


##NOTE

Right now it just checks whether the build works. Need to test functionality
