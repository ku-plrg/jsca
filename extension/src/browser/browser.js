// from content-script
window.addEventListener('message', (event) => {
  if (event.source !== window || event.data.type !== 'req_data') return;

  const data = window.jQuery ? Object.getOwnPropertyNames(window.jQuery) : [];

  // to content-script
  window.postMessage({ type: 'res_data', result: data }, '*');
});
