"use strict";

function elementViewer() {
  var _this = this;
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    elementSelector: 'body',
    visualizationTimer: 3000
  };
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    console.log('Element viewed by 3 seconds (default).');
  };
  var interval;
  var keepListening = true;
  var elementSelector = options.elementSelector,
    visualizationTimer = options.visualizationTimer;
  var element = document.querySelector(elementSelector);
  var listenScrolling = function listenScrolling() {
    if (!keepListening) return;
    clearInterval(interval);
    interval = setInterval(function () {
      var rect = element.getBoundingClientRect();
      var isVisible = rect.top <= 50 && rect.bottom >= element.clientHeight / 2;
      if (isVisible) {
        callback();
        keepListening = false;
        window.removeEventListener('scroll', _this);
      }
      clearInterval(interval);
    }, visualizationTimer);
  };
  window.addEventListener('scroll', listenScrolling);
}