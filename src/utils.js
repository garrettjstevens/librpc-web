export function isObject (object) {
  return Object(object) === object
}

export function isTransferable (object) {
  return object instanceof ArrayBuffer
}

export function peekTransferables (data) {
  var result = []
  if (isTransferable(data)) {
    result.push(data)
  } else if (isObject(data)) {
    for (var i in data) {
      if (isTransferable(data[i])) {
        result.push(data[i])
      }
    }
  }
  return result
}
