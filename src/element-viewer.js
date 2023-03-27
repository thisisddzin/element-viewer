function elementViewer(options = { 
  elementSelector: 'body', 
  visualizationTimer: 3000 
}, callback = () => { 
  console.log('Element viewed by 3 seconds (default).') 
}) {
  let timeout
  const { elementSelector, visualizationTimer } = options
  const element = document.querySelector(elementSelector)
  
  window.addEventListener('scroll', () => {
    clearInterval(timeout)
    timeout = setInterval(() => {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top <= 50 && rect.bottom >= element.clientHeight / 2;

      if (isVisible) {
        callback();
      } else {
        clearTimeout(timeout);
      }
    }, visualizationTimer);
  })
}