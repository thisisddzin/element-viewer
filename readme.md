## INSTALLATION
### SCRIPT
```html
<script src="https://unpkg.com/element-viewer@1.0.2/dist/element-viewer.min.js"></script>
```
### NPM
```bash
npm i element-viewer
```
### YARN
```bash
yarn add element-viewer
```
## USAGE:
```js
elementViewer({
  elementSelector: '.stamped-io', // the element selector to observe if being visualized
  visualizationTimer: 3000 // time to consider the visualization
}, () => {
  sendToAnalytics('review_viewed') // send to analytics with the event name (example method)
})
```

## DEVELOPMENT
- Light Weight on Bundlephobia
- The final file, minified and with babel is: dist/element-viewer.min.js

