// from content-script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background js message', message);
  if (message.type === 'res_data') {
    // to popup
    chrome.runtime.sendMessage({ type: 'res_analyze', result: message.result });
  }
});
