export const postData = async (url, user) => {
  const response = await fetch(`http://localhost:3000/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })

  if (response.ok) {
    return response;
  } else {
    throw new Error(`Error posting data: ${response.status}`);
  }
}

export const fetchData = async (url) => {
  const response = await fetch(url)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Error fetching data')
  }
}