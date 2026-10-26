export const getLinkUrl = (path: string) => {
  const origin = window.location.origin
  if(origin.startsWith('http://localhost')){
    return `http://localhost:5001${path}`
  }else{
    return path
  }
}

export const jumpLink = (path: string) => {
  const url = getLinkUrl(path)
  window.open(url, '_self')
}