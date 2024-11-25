export async function fetchAllLibs() {
  const url = 'https://api.cdnjs.com/libraries';
  const response = await fetch(url);
  return await response.json();
}

export async function fetchLibVersions(libName) {
  const url = `https://api.cdnjs.com/libraries/${libName}?fields=name,versions`;
  const response = await fetch(url);
  return await response.json();
}
