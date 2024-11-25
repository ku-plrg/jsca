import libData from './data.js';
import { calcScore } from './utils.js';

// from content-script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background js message', message);
  if (message.type === 'res_data') {
    const result = calcScore(libData, message.result);
    console.log('background js result', result);
    // to popup
    chrome.runtime.sendMessage({ type: 'res_analyze', result });
  }
});
