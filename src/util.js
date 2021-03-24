// utility for creating unique Id
let id = 0

function getId() {
  return id++
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export { getId, replaceItemAtIndex, removeItemAtIndex }
