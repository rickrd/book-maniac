const doRequest = async url => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  console.log(url)
  try {
    const raw = await fetch(proxyUrl + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (!raw.ok) throw new Error('There was a problem with the request. Status: ' + raw.status)

    if (raw.status === 204) {
      return true
    }

    const parsed = await raw.json()

    return parsed
  } catch (e) {
    throw new Error(e)
  }
}

export default doRequest
