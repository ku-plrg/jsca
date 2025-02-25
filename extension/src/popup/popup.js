const analyzeButton = document.getElementById('btn-analyze'),
  analysisResultDiv = document.getElementById('div-analysis-result');

analyzeButton.addEventListener('click', () => {
  // to background worker
  chrome.runtime.sendMessage({ type: 'req_data' });
});

const renderEachRow = ({ score, count, all, src, name, version }) =>
  `<tr>
    <td>${score}</td>
    <td>(${count}/${all})</td>
    <td>
      <a href="${src}" target="_blank">${name} v${version}</a>
    </td>
  </tr>`;

const toggleLibDivId = (libName) => `toggle-${libName.replaceAll('.', '-')}`;
const libTableId = (libName) => `table-${libName.replaceAll('.', '-')}`;

const renderEachTable = ({ libName, detected, versions }) =>
  `
  <div id="${toggleLibDivId(libName)}" class="div-table-title ${
    detected ? 'detected' : ''
  }">
    <span>${libName}</span>
    <span>${detected ? '✅' : '❌'}</span>
    <span>${versions[0] ? versions[0].version : ''}</span>
  </div>
  <table border="0" cellspacing="0" id="${libTableId(libName)}" class="table">
    ${versions.map(renderEachRow).join('')}
  </table>
  `;

const toggleVisibility = (libName) => {
  document.getElementById(libTableId(libName)).classList.toggle('visible');
};

// from background worker
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type !== 'res_analyze') return;

  if (Array.isArray(message.result)) {
    analysisResultDiv.innerHTML = message.result.map(renderEachTable).join('');
    message.result.forEach(({ libName }) => {
      document
        .getElementById(toggleLibDivId(libName))
        .addEventListener('click', () => {
          toggleVisibility(libName);
        });
    });
  } else {
    analysisResultDiv.textContent = message.result;
  }
});
