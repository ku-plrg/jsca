const extractTree = (page, cdnPath) =>
  new Promise((resolve, reject) => {
    page.on('console', (msg) => {
      const text = msg.text();
      if (
        text.startsWith('{') &&
        text.endsWith('}') &&
        typeof JSON.parse(text).src === 'string'
      ) {
        try {
          const result = JSON.parse(text);
          setTimeout(() => {
            resolve(result);
          }, 50); // for stable browser.close()
        } catch (e) {
          reject(`Failed to parse JSON from console: ${text}`);
        }
      }
    });

    page
      .evaluate((cdnPath) => {
        return new Promise((_resolve) => {
          window.originalGlobalVariables = JSON.stringify(
            Object.getOwnPropertyNames(window)
          );
          const script = document.createElement('script');
          script.src = cdnPath;
          script.id = 'dynamic-cdn';
          script.onload = _resolve;
          document.head.appendChild(script);
        });
      }, cdnPath)
      .then(() => {
        page.click('button');
      })
      .catch(reject);
  });

export default extractTree;
