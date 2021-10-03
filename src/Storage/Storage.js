export function getLocalData(dataName) {
  const storedData = localStorage.getItem(dataName);
  if (!storedData) return;
  return JSON.parse(storedData);
}

export function changeLocalData({ dataName, object }) {
  const parsedObject = JSON.stringify(object);
  localStorage.setItem(dataName, parsedObject);
}

export function getSessionData(dataName) {
  const storedData = window.sessionStorage.getItem(dataName);
  if (!storedData) return;
  return JSON.parse(storedData);
}

export function changeSessionData({ dataName, object }) {
  const parsedObject = JSON.stringify(object);
  window.sessionStorage.setItem(dataName, parsedObject);
}
