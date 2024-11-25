const script = document.createElement('script');
script.src = chrome.runtime.getURL('src/browser/browser.js');
script.id = 'jsca-injected-script';
document.head.appendChild(script);

// from ext popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type !== 'req_data') return;

  // to injected script
  window.postMessage(message, '*');
});

// from injected script
window.addEventListener('message', (event) => {
  if (event.data.type !== 'res_data') return;

  // to background worker
  chrome.runtime.sendMessage({
    type: 'res_data',
    result: event.data.result,
  });
});
