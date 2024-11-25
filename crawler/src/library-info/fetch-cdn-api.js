import axios from 'axios';

export async function fetchAllLibs() {
  const url = 'https://api.cdnjs.com/libraries';
  const response = await axios.get(url);
  return response.data.results.map((res) => res.name);
}

export async function fetchLibInfo(libName) {
  const url = `https://api.cdnjs.com/libraries/${libName}?fields=name,versions,filename`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchVersionAssets(libName, version) {
  const url = `https://api.cdnjs.com/libraries/${libName}/${version}`;
  const response = await axios.get(url);
  return response.data.files || [];
}
