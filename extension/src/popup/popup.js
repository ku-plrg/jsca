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
    <table border="0" cellspacing="0">
    ${message.result
      .map(
        (res) =>
          `<tr>
            <td>${res.score}</td>
            <td>(${res.count}/${res.all})</td>
            <td>
              <a href="${res.src}" target="_blank">${res.name} v${res.version}</a>
            </td>
          </tr>`
      )
      .join('')}
    </table>`;
  } else {
    analysisResultDiv.textContent = message.result;
  }
});
