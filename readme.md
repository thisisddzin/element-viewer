## USAGE:
```js
elementViewer({
  elementSelector: '.stamped-io', // the element selector to observe if being visualized
  visualizationTimer: 3000 // time to consider the visualization
}, () => {
  sendToAnalytics('review_viewed') // send to analytics with the event name (example method)
})
```
