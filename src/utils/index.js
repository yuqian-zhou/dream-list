function getDeviceType() {
  const userAgent = navigator.userAgent;
  if (
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

function saveItemsToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function getItemsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


export { getDeviceType, saveItemsToLocalStorage, getItemsFromLocalStorage };
