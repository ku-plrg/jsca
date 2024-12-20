const extractTree = (page, scriptPath) =>
  new Promise((resolve, reject) => {
    page.on('console', (msg) => {
      const text = msg.text();
      if (text.startsWith('{') && text.endsWith('}')) {
        try {
          const result = JSON.parse(text);
          setTimeout(() => {
            resolve(result);
          }, 100); // for stable browser.close()
        } catch (e) {
          reject(`Failed to parse JSON from console: ${text}`);
        }
      }
    });

    page
      .evaluate((scriptPath) => {
        return new Promise((_resolve) => {
          window.originalGlobalVariables = JSON.stringify(
            Object.getOwnPropertyNames(window)
          );
          const script = document.createElement('script');
          script.src = scriptPath;
          script.onload = _resolve;
          document.head.appendChild(script);
        });
      }, scriptPath)
      .then(() => {
        page.click('button');
      })
      .catch(reject);
  });

export default extractTree;
