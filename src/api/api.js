// const url = 'http://localhost:3000/api/'
const url = 'https://falsemotive.io/api/'

export const postData = async (options = '', user) => {
  const response = await fetch(`${url}${options}`, {
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

export const fetchData = async (options) => {
  const response = await fetch(`${url}${options}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Error fetching data')
  }
}