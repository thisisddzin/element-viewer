function elementViewer(options = { 
  elementSelector: 'body', 
  visualizationTimer: 3000 
}, callback = function () { 
  console.log('Element viewed by 3 seconds (default).') 
}) {
  var { elementSelector, visualizationTimer } = options
  var timeout
  var element = document.querySelector(elementSelector)
  
  window.addEventListener('scroll', function () {
    clearInterval(timeout)
    timeout = setInterval(function () {
      var rect = element.getBoundingClientRect()
      var isVisible = rect.top <= 50 && rect.bottom >= element.clientHeight / 2;

      if (isVisible) {
        callback();
      } else {
        clearTimeout(timeout);
      }
    }, visualizationTimer);
  })
}