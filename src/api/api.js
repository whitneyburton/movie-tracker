// const url = 'http://localhost:3000/api/'
const url = 'https://falsemotive.io/api/'

// const options 

export const postData = async (path = '', user) => {
  const response = await fetch(`${url}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })

  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.message}: ${response.status}`);
  }
}

export const fetchData = async (path) => {
  const response = await fetch(`${url}${path}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`${response.message}: ${response.status}`);
  }
}