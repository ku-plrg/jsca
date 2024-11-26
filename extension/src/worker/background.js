import libData from './data.js';
import { calcScore, getTargetProperties } from './utils.js';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // from popup
  if (message.type === 'req_data') {
    // to content-script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: 'req_data',
        targetProperties: getTargetProperties(libData),
      });
    });
  }
  // from content-script
  if (message.type === 'res_data') {
    const result = calcScore(libData, message.result);
    // to popup
    chrome.runtime.sendMessage({ type: 'res_analyze', result });
  }
});
