export function getLocalData(formName) {
    const storedData = localStorage.getItem(formName);
    if (!storedData) return;
    return JSON.parse(storedData);
  }
  
  export function changeLocalData({ formName, object }) {
    const parsedObject = JSON.stringify(object);
    localStorage.setItem(formName, parsedObject);
  }
