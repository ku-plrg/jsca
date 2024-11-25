## Requirements
- Node.js >= 18

## How to run

### install dependencies
```
npm install
```

### get library info from cdn
```
npm run update-library-info
```

### analyze browser
```
npm run analyze-browser
```


## File descriptions

| file | description | 
|-|-|
| index.js | puppeteer crawler |
| constants.js | 메인 로직과 크게 상관 없는 안 바뀌는 값들 | 
| index.html | index.js가 만드는 puppeteer 가상 브라우저에 띄워지는 document |
| browser.js | index.html에 붙은 스크립트. target runtime property의 direct children을 구하여 console.log |