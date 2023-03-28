function elementViewer(options = { 
  elementSelector: 'body', 
  visualizationTimer: 3000 
}, callback = () => { 
  console.log('Element viewed by 3 seconds (default).') 
}) {
  let interval
  let keepListening = true
  const { elementSelector, visualizationTimer } = options
  const element = document.querySelector(elementSelector)
  
  const listenScrolling = () => {
    if(!keepListening) return
    
    clearInterval(interval)
    interval = setInterval(() => {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top <= 50 && rect.bottom >= element.clientHeight / 2

      if (isVisible) {
        callback()
        keepListening = false
        window.removeEventListener('scroll', this)
      }

      clearInterval(interval)
    }, visualizationTimer)
  }

  window.addEventListener('scroll', listenScrolling)
}