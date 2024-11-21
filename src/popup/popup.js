const analyzeButton = document.getElementById('btn-analyze'),
  analysisResultDiv = document.getElementById('div-analysis-result');

analyzeButton.addEventListener('click', () => {
  // to content-script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'req_data',
    });
  });
});

// from background worker
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type !== 'res_analyze') return;

  if (Array.isArray(message.result)) {
    analysisResultDiv.innerHTML = `
    <ul>
    ${message.result.map((res) => `<li>${res}</li>`).join('')}
    </ul>`;
  } else {
    analysisResultDiv.textContent = message.result;
  }
});
