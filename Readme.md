## Structure
```
├── 📁 assets
│   └── 📁 logo
├── manifest.json 
└── 📁 src
    ├── 📁 browser
    │   ├── browser.js // inject into browser
    │   └── content-script.js 
    │       // inject browser.js, message between browser and background
    ├── 📁 popup
    │   ├── index.html
    │   ├── popup.js
    │   └── style.css
    └── 📁 worker
        ├── background.js // calculate scores
        ├── jquery-data.js
        └── utils.js
```

## Docs Reference
### Concepts
- [Messaging](https://developer.chrome.com/docs/extensions/develop/concepts/messaging)
- [Content Scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)
### Testing & Debugging
- [How to Load Unpacked Extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
- [How to Reveal Inspector for Extension Popup](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#logs)
