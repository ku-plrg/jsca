// from content-script
window.addEventListener('message', (event) => {
  if (
    event.source !== window ||
    event.data.type !== 'req_data' ||
    event.data.targetProperties === undefined
  )
    return;

  const data = {};

  event.data.targetProperties.forEach((targetProperty) => {
    data[targetProperty] = window[targetProperty]
      ? Object.getOwnPropertyNames(window[targetProperty])
      : [];
  });

  // to content-script
  window.postMessage({ type: 'res_data', result: data }, '*');
});
