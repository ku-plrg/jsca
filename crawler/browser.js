function getDirectChildren(nameSpace) {
  const globalVariables = Object.getOwnPropertyNames(window);
  const directChildren = globalVariables.includes(nameSpace)
    ? Object.getOwnPropertyNames(window[nameSpace])
    : [];
  const scriptSrc = document.getElementById('dynamic-cdn').src;

  console.log(
    JSON.stringify({
      src: scriptSrc,
      directChildren,
      directChildrenNum: directChildren.length,
    })
  );
}
