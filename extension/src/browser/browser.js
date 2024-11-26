// from content-script
window.addEventListener('message', (event) => {
  if (event.source !== window || event.data.type !== 'req_data') return;

  const data = {
    // TODO generalize this
    jQuery: window.jQuery ? Object.getOwnPropertyNames(window.jQuery) : [],
    $: window.$ ? Object.getOwnPropertyNames(window.$) : [],
    _: window._ ? Object.getOwnPropertyNames(window._) : [],
    moment: window.moment ? Object.getOwnPropertyNames(window.moment) : [],
  };

  // to content-script
  window.postMessage({ type: 'res_data', result: data }, '*');
});
