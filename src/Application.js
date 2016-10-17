/**
 * Demo for GameClosure DevKit Supersonic/ironSource Module
 */

import ui.TextView as TextView;
import src.views.LogView as LogView;
import src.views.ButtonView as ButtonView;
import device;

import supersonic;


exports = Class(GC.Application, function () {

  this.initUI = function () {
    this.view.style.backgroundColor = 'white';
    this.header = new TextView({
      superview: this.view,
      text: "Supersonic Demo",
      color: "black",
      x: 0,
      y: 25,
      width: this.view.style.width,
      height: 100
    });

    var buttonPadding = 20;
    var buttonWidth = (this.view.style.width - (buttonPadding * 2));
    var buttonWidth2 = (this.view.style.width - (buttonPadding * 3)) / 2;
    var buttonWidth3 = (this.view.style.width - (buttonPadding * 4)) / 3;
    var buttonStart1 = buttonPadding;
    var buttonStart22 = buttonPadding + buttonWidth2 + buttonPadding;
    var buttonStart32 = buttonPadding + buttonWidth3 + buttonPadding;
    var buttonStart33 = (buttonPadding * 3) + (buttonWidth3 * 2);
    var buttonHeight = 75;

    buttonY = this.header.style.y + this.header.style.height + buttonPadding;

    this.videoStatusView = new TextView({
      superview: this.view,
      x: buttonStart1,
      y: buttonY,
      width: buttonWidth,
      height: buttonHeight,
      text: "Video Status: Waiting",
      visible: false
    });

    buttonY += buttonHeight + buttonPadding;

    this.cacheVideoButton = new ButtonView({
      superview: this.view,
      x: buttonStart1,
      y: buttonY,
      width: buttonWidth,
      height: buttonHeight,
      title: "Cache Video",
      visible: false,
      onClick: bind(this, this.cacheVideo)
    });

    buttonY += buttonHeight + buttonPadding;

    this.showVideoButton = new ButtonView({
      superview: this.view,
      x: buttonStart1,
      y: buttonY,
      width: buttonWidth,
      height: buttonHeight,
      title: "Show Video",
      visible: false,
      onClick: bind(this, this.showVideo)
    });

    buttonY += buttonHeight + buttonPadding;

    var logViewY = buttonY + buttonHeight + 150;
    this.logView = new LogView({
      superview: this.view,
      x: 0,
      y: logViewY,
      width: this.view.style.width,
      height: this.view.style.height - logViewY
    });

    // listen for events
    this._createEventListeners();
  };

});
